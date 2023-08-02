import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //PARA OBTENER LOS PARAMETROS DE LA URL
import { Artist as ArtistController } from "../../api";
import { ArtistBanner } from "../../components/Artist";

import "./Artist.scss";

const artistController = new ArtistController();

export function Artist(props) {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  const [artists, setArtists] = useState(null);

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

  if (!artists) return null;

  return (
    <div className="artist-page">
      <ArtistBanner artist={artists} />
      <div className="artist-page__slider">
        <h2>Albunes</h2>
      </div>
      <div className="artist-page__slider">
        <h2>Canciones</h2>
      </div>
    </div>
  );
}
