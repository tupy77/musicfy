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
  const [size, setSize] = useState(0);
  const itemRef = useRef();

  useEffect(() => {
    if (itemRef.current) {
      console.log(itemRef.current);
      setSize(itemRef.current.clientWidth);
    }
  }, []);

  return (
    <Slick {...settings} className="slider">
      {map(data, (item) => {
        if (song) {
          return (
            <div
              key={item.id}
              className="slider__item"
              ref={itemRef}
              onClick={console.log("Reproduciendo cancion")}
            >
              <div className="slider__item-block-play">
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{ heigth: size }}
                />
                <Icon name="play circle outline" size="huge" />
              </div>
              <h3>{item.name}</h3>
            </div>
          );
        }

        return (
          <Link
            to={`/${basePath}/${item.id}`}
            key={item.id}
            className="slider__item"
            ref={itemRef}
          >
            <Image src={item.image} alt={item.name} style={{ heigth: size }} />
            <h3>{item.name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
}
