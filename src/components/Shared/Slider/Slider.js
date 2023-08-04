import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import Slick from "react-slick";
import { map } from "lodash";
import "./Slider.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  swipToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
};

export function Slider(props) {
  const { data, basePath, song } = props;

  return (
    <Slick {...settings} className="slider">
      {map(data, (item) => {
        if (song) {
          <div
            key={item.id}
            className="slider__item"
            onClick={console.log("Reproduciendo cancion")}
          >
            <div className="slider__item-block-play">
              <Image src={item.image} alt={item.name} />
              <Icon name="play circle outline" size="huge" />
            </div>
            <h3>{item.name}</h3>
          </div>;
        }
        return (
          <Link
            to={`/${basePath}/${item.id}`}
            key={item.id}
            className="slider__item"
          >
            <Image src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
}
