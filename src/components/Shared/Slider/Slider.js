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
};

export function Slider(props) {
  const { data, basePath } = props;
  let counter = 0;
  return (
    <Slick {...settings} className="slider">
      {map(data, (item) => {
        counter++;
        return (
          <Link
            to={`/${basePath}/${item.id}`}
            key={item.id}
            className="slider__item"
          >
            <p>Soy el elemento: {counter}</p>
            <Image src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
}
