import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "free cocktails",
        info:
          "Watermelon Margarita, Sin-free Sangria, Mojito Mocktail, Cranberry Cosmopolitan and Pina Colada."
      },
      {
        icons: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icons: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icons: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={`item-${item.title}`} className="service">
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
