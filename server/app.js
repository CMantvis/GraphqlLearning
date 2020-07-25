const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://Mantvydas:15312047@cluster0.nhfpz.mongodb.net/cluster0?retryWrites=true&w=majority", 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.once('open', () => {
  console.log("connected to database");
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true,
  }));

app.listen(4000, () => {
    console.log("now listening on port 4000");
});