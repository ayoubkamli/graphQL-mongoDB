import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

const GET_ALL_POSTS = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  const [fetchPosts, { data: postsData }] = useLazyQuery(GET_ALL_POSTS);

  if (error) {
    throw error;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row p-5">
        {data.allPosts.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>{p.title}</h4>
                </div>
                <div className="card-text">
                  <p>{p.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn-btn-raiswd btn-primary"
        onClick={() => fetchPosts()}
      >
        Fetch Data
      </button>
      <div>{JSON.stringify(postsData)}</div>
    </div>
  );
};

export default Home;
