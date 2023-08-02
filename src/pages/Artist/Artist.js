import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //PARA OBTENER LOS PARAMETROS DE LA URL
import { Artist as ArtistController } from "../../api";

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

  console.log(artists);

  return (
    <div>
      <h1>Artist</h1>
    </div>
  );
}
