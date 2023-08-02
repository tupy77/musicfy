import React from "react";
import { Grid, Loader } from "semantic-ui-react";
import { map, size } from "lodash";
import { Link } from "react-router-dom";
import "./ListArtists.scss";

export function ListArtists(props) {
  const { artists } = props;
  //   return (
  // <div>
  //   <ul>
  //     {artists.map((artist) => (
  //       <li key={artist.id}>{artist.name}</li>
  //     ))}
  //   </ul>
  //   </div>
  if (size(artists) === 0) {
    return (
      <Loader active inline="centered">
        Loading...
      </Loader>
    );
  }

  return (
    <Grid className="list-artits">
      <Grid.Row columns={5}>
        {map(artists, (artist) => (
          <Grid.Column
            key={artist.id}
            className="list-artists__artist"
            as={Link}
            to={`/artist/${artist.id}`}
            mobile={8}
            tablet={4}
            computer={3}
          >
            <div style={{ backgroundImage: `url('${artist.image}')` }} />
            <p>{artist.name}</p>
            {/* <Link to={`/artist/${artist.id}`}>{artist.name}</Link> */}
            {/* <Artist artist={artist} /> */}
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}
