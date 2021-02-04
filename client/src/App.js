import React, { useState } from "react";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
  const [posts, setPosts] = useState([]);

  client
    .query({
      query: gql`
        {
          allPosts {
            id
            title
            description
          }
        }
      `,
    })
    .then((result) => setPosts(result.data.allPosts));

  return <p>{JSON.stringify(posts)}</p>;
};

export default App;
