import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import "./AddSongForm.scss";
import classNames from "classnames";

export function AddSongForm() {
  const [songName, setSongName] = useState("");

  return (
    <Form className="add-song-form">
      <Form.Input name="name" placeholder="Nombre de la cación" />
      <Form.Dropdown
        placeholder="Asigna la canción a un álbum"
        fluid
        search
        selection
        options={[]}
      />

      <div
        className={classNames("add-song-form__file", {
          error: false,
        })}
      >
        <Icon name="cloud upload" />
        <div>
          <p>
            Arrastra tu cacnción o haz click <span>aquí</span>
          </p>
          {songName && <p className="song-name">{songName}</p>}
        </div>
      </div>

      <Form.Button type="submit" primary fluid>
        Subir canción
      </Form.Button>
    </Form>
  );
}
