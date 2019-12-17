import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import MusicPlayer from "./MusicPlayer";

const PlayerProvider = () => {

  return (
    <Query query={Queries.FETCH_ALL_SONGS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        return <MusicPlayer playlist={data.songs} />
      }}
    </Query>
  )
}

export default PlayerProvider;