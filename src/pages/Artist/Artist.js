import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //PARA OBTENER LOS PARAMETROS DE LA URL
import { Artist as ArtistController, Album, Song } from "../../api";
import { map } from "lodash";
import { ArtistBanner } from "../../components/Artist";
import { Slider } from "../../components";

import "./Artist.scss";

const artistController = new ArtistController();
const albumController = new Album();
const songController = new Song();

export function Artist(props) {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [songs, setSongs] = useState(null);

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

  useEffect(() => {
    if (albums) {
      (async () => {
        try {
          const arrayAlbums = [];
          for await (const album of albums) {
            const response = await songController.obtainAllByAlbum(album.id);
            const dataTemp = map(response, (song) => {
              return {
                ...song,
                album: album.name,
                albumImage: album.image,
              };
            });

            arrayAlbums.push(...dataTemp); //Los tres puntos son para tener un array de objetos, no un array de arrays
            // arrayAlbums.push(response);
          }

          console.log(arrayAlbums);
          setSongs(arrayAlbums);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [albums]);

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
