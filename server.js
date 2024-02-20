const path = require("path");
const express = require("express");
const { createYoga } = require("graphql-yoga");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const PORT = 3000 || process.env.PORT;

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();
app.all(
  "/graphql",
  createYoga({
    schema: schema,
  }),
);

app.listen(PORT, () => {
  console.log("The GraphQL server is listening the port: ", PORT);
});
