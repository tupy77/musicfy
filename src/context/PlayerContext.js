import React, { useState, useEffect, createContext } from "react";

export const PlayerContext = createContext({});

export function PlayerProvider(props) {
  const { children } = props;
  const [song, setSong] = useState([]);
  const [miniature, setMiniature] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const playSong = (newSong, newMiniature) => {
    // Reproducir canción
    // setSong(newSong);
    // setMiniature(newMiniature);
    // setPlaying(true);
  };

  const pause = () => {
    setPlaying(false);
  };

  const resume = () => {
    setPlaying(true);
  };

  const data = {
    playSong,
    pause,
    resume,

    song,
    miniature,
    playing,
    volume,
  };

  return (
    <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
  );
}

// export function PlayerProvider({ children }) {
//     const [artists, setArtists] = useState([]);
//     const [albums, setAlbums] = useState([]);
//     const [songs, setSongs] = useState([]);

//     useEffect(() => {
//         (async () => {
//         try {
//             const response = await artistController.getLastArtists(8);
//             // console.log(response);
//             setArtists(response);
//         } catch (error) {
//             console.log(error);
//         }
//         })();
//     }, []);

//     useEffect(() => {
//         (async () => {
//         try {
//             const response = await albumController.getLastAlbums(8);
//             // console.log(response);
//             setAlbums(response);
//         } catch (error) {
//             console.log(error);
//         }
//         })();
//     }, []);

//     useEffect(() => {
//         (async () => {
//         try {
//             const response = await songController.getLastSongs(8);

//             let data = [];
//             for await (const item of response) {
//             const song = item;
//             const resultAlbum = await albumController.getAlbum(item.album);
//             song.image = resultAlbum.image;
//             data.push(song);
//             }

//             // console.log(data);
//             setSongs(data);
//         } catch (error) {
//             console.log(error);
//         }
//         })();
//     }, []);

//     return (
//         <PlayerContext.Provider value={{ artists, albums, songs }}>
//         {children}
//         </PlayerContext.Provider>
//     );
//     }
