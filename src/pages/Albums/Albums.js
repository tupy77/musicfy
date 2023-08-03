import React, { useState, useEffect } from "react";
import { Album } from "../../api";
import { ListAlbums } from "../../components/Albums";
import "./Albums.scss";

const albumController = new Album();

export function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.obtainAll();
        console.log(response);
        setAlbums(response);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="albums-page">
      <h1>Albumes</h1>
      <ListAlbums albums={albums} />
    </div>
  );
}
