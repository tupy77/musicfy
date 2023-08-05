import React, { useState, useEffect } from "react";
import { Artist, Album, Song } from "../../api";

import { Slider } from "../../components/Shared";
import { bannerHome } from "../../assets";
import "./Home.scss";

const artistController = new Artist();
const albumController = new Album();
const songController = new Song();

export function Home() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getLastArtists(8);
        // console.log(response);
        setArtists(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getLastAlbums(8);
        // console.log(response);
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await songController.getLastSongs(8);
        // console.log(response);
        setSongs(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="home-page">
      <div
        className="home-page__banner"
        style={{ backgroundImage: `url(${bannerHome})` }}
      />
      <div className="home-page__slider">
        <h2>Ultimos artistas</h2>
        {artists && <Slider data={artists} basePath="artists" />}
        <h2>Ultimos albumes</h2>
        {albums && <Slider data={albums} basePath="albums" />}
        <h2>Ultimos canciones</h2>
        {songs && <Slider data={songs} basePath="songs" />}
      </div>
    </div>
  );
}
