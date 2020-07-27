import React from 'react';
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost"; //npm i apollo-boost react-apollo graphql --save
import { ApolloProvider } from "react-apollo"; // so that react understands apollo
import AddBook from "./components/AddBook"

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
