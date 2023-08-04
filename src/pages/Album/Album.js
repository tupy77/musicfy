import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { Album as AlbumControler, Song as SongController } from "../../api";

import { AlbumInfo, ListSongs } from "../../components";
import "./Album.scss";

const songController = new SongController();

export function Album() {
  const [album, setAlbum] = useState(null);
  const { id } = useParams();
  const [songs, setSongs] = useState([]);

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

  useEffect(() => {
    const getSongs = async () => {
      try {
        const songs = await songController.obtainAllByAlbum(id);
        // console.log(songs);
        setSongs(songs);
      } catch (error) {
        console.log(error);
      }
    };
    getSongs();
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
      <ListSongs songs={songs} albumImage={album.image[0].url} />
    </div>
  );
}
