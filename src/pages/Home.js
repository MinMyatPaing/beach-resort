import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Services from "./Services";
import FeaturedRooms from '../components/Rooms/FeaturedRooms';

const Home = (props) => {
  return (
  <React.Fragment>
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
  </React.Fragment>
  );
};

export default Home;
