import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import "./AlbumInfo.scss";

export function AlbumInfo(props) {
  const {
    album: { name, image, artist },
  } = props;

  return (
    <div className="album-info">
      <Image src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>De: Nombre del artista</p>
      </div>
    </div>
  );
}
