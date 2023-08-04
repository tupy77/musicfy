import React from "react";
import { size, map } from "lodash";

import { Table, Icon } from "semantic-ui-react";
import "./ListSongs.scss";

export function ListSongs(props) {
  const { songs, albumImage } = props;

  if (size(songs) === 0) {
    return (
      <div className="list-songs-empty">
        <h2>No hay canciones</h2>
      </div>
    );
  }

  return (
    <Table inverted className="list-songs">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Titulo</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(songs, (song) => (
          <Table.Row key={song.id}>
            <Table.Cell>
              <Icon name="play circle outline" />
            </Table.Cell>
            <Table.Cell>{song.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
