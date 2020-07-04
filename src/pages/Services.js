import React, { Component } from "react";
import { FaBeer, FaHiking, FaCocktail, FaShuttleVan } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ultricies nibh, vitae vulputate justo iaculis vel. Sed tincidunt elementum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ultricies nibh, vitae vulputate justo iaculis vel. Sed tincidunt elementum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ultricies nibh, vitae vulputate justo iaculis vel. Sed tincidunt elementum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: <FaBeer />,
        title: "Tasty Beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ultricies nibh, vitae vulputate justo iaculis vel. Sed tincidunt elementum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
