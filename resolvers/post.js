//const { gql } = require("apollo-server-express");
const { posts } = require("../temp");

const counter = () => posts.length;

const allPosts = () => posts;

module.exports = {
  Query: {
    counter,
    allPosts,
  },
};
