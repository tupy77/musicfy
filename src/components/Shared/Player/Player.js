import React from "react";
import ReactPlayer from "react-player";
import { usePlayer } from "../../../hooks";
import { Progress, Icon } from "semantic-ui-react";
import "./Player.scss";

export function Player() {
  const { song, playing, pause, volume, resume } = usePlayer();

  return (
    <div className="player">
      <Icon
        name={playing ? "pause circle outline" : "play circle outline"}
        onClick={playing ? pause : resume}
      />
      <Progress progress="value" value={30} total={100} size="tiny" />

      <ReactPlayer
        url={song?.file}
        playing={playing}
        volume={volume}
        height={0}
        width={0}
      />
    </div>
  );
}
