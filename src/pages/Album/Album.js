import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { Album as AlbumControler } from "../../api";

import { AlbumInfo } from "../../components";
import "./Album.scss";

export function Album() {
  const [album, setAlbum] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const album = await new AlbumControler().getAlbum(id);
        // console.log(album);
        setAlbum(album);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbum();
  }, [id]);

  if (!album)
    return (
      <Loader active inline="centered" size="large">
        Cargando...
      </Loader>
    );

  return (
    <div className="album-page">
      <AlbumInfo album={album} />
    </div>
  );
}
