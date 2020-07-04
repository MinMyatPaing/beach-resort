import React, { Component } from "react";

import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    maxSize: 0,
    minSize: 0,
    maxPrice: 0,
    minPrice: 0,
    pets: false,
    breakfast: false,
  };

  getData = async () => {
    let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "sys.createdAt"
    });

    let rooms = this.formatData(response.items);
    let featuredRooms = rooms.filter((room) => room.featured);
    // console.log(featuredRooms);
    const maxPrice = Math.max(...rooms.map((room) => room.price));
    const maxSize = Math.max(...rooms.map((room) => room.size));
    this.setState({
      rooms: rooms,
      sortedRooms: rooms,
      featuredRooms: featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });

  }

  componentDidMount() {
    this.getData();
  }

  formatData = (items) => {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
  };

  filterRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      maxSize,
      minSize,
      breakfast,
      pets,
    } = this.state;
    capacity = parseInt(capacity);
    price = parseInt(price);
    let tempRooms = [...rooms];

    //filter by type
    if( type !== 'all' ) {
        tempRooms = tempRooms.filter(room => room.type === type);
    }

    //filter by capacity
    if( capacity !== 1 ) {
        tempRooms = tempRooms.filter(room => room.capacity>=capacity);
    }

    //filter by price
    if( price !== 600 ) {
        tempRooms = tempRooms.filter(room => room.price <= price)
    }

    //fitler by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    //filter by breakfast
    if(breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === breakfast);
    }

    //filter by pets
    if(pets) {
        tempRooms = tempRooms.filter(room => room.pets === pets);
    }

    this.setState({sortedRooms: tempRooms});
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export const withRoomContext = (Component) => {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => {
          return <Component {...props} context={value} />;
        }}
      </RoomConsumer>
    );
  };
};

export { RoomContext, RoomConsumer };
export default RoomProvider;
