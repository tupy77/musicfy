import React from "react";
import { Link } from "react-router-dom";
import { Loader, Grid, Image } from "semantic-ui-react";
import { map, size } from "lodash";
import "./ListAlbums.scss";

export function ListAlbums(props) {
  const { albums } = props;
  console.log(albums);

  if (size(albums) === 0)
    return (
      <Loader active inline="centered" size="large">
        Cargando...
      </Loader>
    );

  return (
    <Grid className="list-albums">
      <Grid.Row columns={5}>
        {map(albums, (album) => (
          <Grid.Column
            key={album.id}
            as={Link}
            to={`/albums/${album.id}`}
            className="list-albums__album"
          >
            <Image src={album.image} alt={album.name} />
            <h1>{album.name}</h1>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}
