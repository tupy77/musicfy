import React from "react";
import { usePlayer } from "../../../hooks";
import "./Footer.scss";
import { Image, Input, Icon } from "semantic-ui-react";
import { Player } from "../../";

export function Footer() {
  const { song, miniature } = usePlayer();

  return (
    <div className="footer">
      <div className="footer__left">
        {miniature && <Image src={miniature} />}
        <br></br>
        {song && <p>{song}</p>}
      </div>

      <div className="footer__center">
        <Player />
      </div>

      <div className="footer__right">
        <Input
          label={<Icon name="volume up" />}
          type="range"
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </div>
  );
}
