const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { db } = require("./databse/dbConfig");

const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require("merge-graphql-schemas");

require("dotenv").config();

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./typeDefs")));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);

const app = express();

db();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app });

app.listen(process.env.PORT, () => {
  console.log(`this Server is running on localhost:${process.env.PORT}`);
  console.log(
    `this Server is running on localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
