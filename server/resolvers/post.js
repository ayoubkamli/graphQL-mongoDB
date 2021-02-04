//const { gql } = require("apollo-server-express");
const { posts } = require("../temp");

//queries
const counter = () => posts.length;

const allPosts = () => posts;

//mutations

const newPost = (parent, args) => {
  console.log(args);
  // create new post object
  const post = {
    id: posts.length + 1,
    ...args.input,
  };
  posts.push(post);
  return post;
};

module.exports = {
  Query: {
    counter,
    allPosts,
  },
  Mutation: {
    newPost,
  },
};
