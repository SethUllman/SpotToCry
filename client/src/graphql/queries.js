import gql from "graphql-tag";

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_SONGS: gql`
    query Fetch_Songs{
      songs{
        _id
        title
      }
    }
  `,
  FETCH_ARTISTS: gql`
    {
      artists{
        _id
        name
      }
    }
  `,
};
