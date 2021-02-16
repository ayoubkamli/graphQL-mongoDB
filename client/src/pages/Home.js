import React, { useContext } from "react";
import { gql } from "apollo-boost";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { AuthContext } from "../context/authContext";
import { useHistory } from "react-router-dom";

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

  const { state, dispatch } = useContext(AuthContext);

  //react router
  let history = useHistory();

  const updateUserName = () => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: "akamli 1337",
    });
  };

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
      <hr />
      {JSON.stringify(state.user)}
      <hr />
      <button className="btn btn-primary" onClick={updateUserName}>
        Change user name
      </button>
    </div>
  );
};

export default Home;
