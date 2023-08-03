import React, { useState, useEffect } from "react";
import { Album } from "../../api";

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
    <div>
      <h1>Albums</h1>
    </div>
  );
}
