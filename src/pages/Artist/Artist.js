import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //PARA OBTENER LOS PARAMETROS DE LA URL
import { Artist as ArtistController, Album } from "../../api";
import { ArtistBanner } from "../../components/Artist";
import { Slider } from "../../components/Shared";

import "./Artist.scss";

const artistController = new ArtistController();
const albumController = new Album();

export function Artist(props) {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(id);
        setArtists(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbumsByArtist(id);
        // console.log(response);
        setAlbums(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!artists) return null;

  return (
    <div className="artist-page">
      <ArtistBanner artist={artists} />
      <div className="artist-page__slider">
        <h2>Albumes</h2>
        <Slider data={albums} basePath="albums"></Slider>
      </div>
      <div className="artist-page__slider">
        <h2>Canciones</h2>
      </div>
    </div>
  );
}
