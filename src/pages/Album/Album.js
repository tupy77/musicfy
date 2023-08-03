import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Album as AlbumControler } from "../../api";

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

  return (
    <div>
      <h1>Album</h1>
    </div>
  );
}
