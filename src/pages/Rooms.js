import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import RoomContainer from "../components/Rooms/RoomContainer";

const Rooms = (props) => {
  return (
    <React.Fragment>
      <Hero cssClass="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </React.Fragment>
  );
};

export default Rooms;
