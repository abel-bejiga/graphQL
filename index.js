import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import { resolvers } from "./data/resolvers.js";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is running");
});


app.use(
  "/graphql",
  graphqlHTTP({
    schema, //schema: schema
    rootValue: resolvers,
    graphiql: true,
    customFormatErrorFn: (err) => {
      console.error(err);
      return {
        message: err.message,
        path: err.path,
        locations: err.locations,
      };
    },
  })
);

app.listen(8080, () => console.log("Running server on localhost:8080"));
