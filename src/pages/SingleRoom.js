import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RoomContext } from "../context";
import defaultBG from "../images/room-1.jpeg";
import Banner from "../components/Banner/Banner";
import StyledHero from "../components/Hero/StyledHero";

class SingleRoom extends Component {
    
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBG: defaultBG,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...!</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      extras,
      breakfast,
      capacity,
      size,
      price,
      pets,
      images,
    } = room;
    console.log(room);

    const mainImage = images[0];
    const listImages = images.filter((image) => image !== mainImage);
    return (
      <React.Fragment>
        <StyledHero img={mainImage || this.state.defaultBG}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {listImages.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size}SQFT</h6>
            <h6>
              capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
          <article className="room-extras">
              <h6>extras</h6>
              <ul className="extras">
                {extras.map((extra, index) => {
                    return <li key={index}>-{extra}</li>
                    })
                }
              </ul>
          </article>
        </div>
        </section>
      </React.Fragment>
    );
  }
}

export default SingleRoom;
