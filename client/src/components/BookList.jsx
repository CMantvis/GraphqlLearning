import React, { Component } from 'react';
import {getBooksQuery} from "../queries/queries"; 
import {graphql} from "react-apollo";
import BookDetails from "./BookDetails";


class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks() {
        let data = this.props.data;
        if(data.loading) {
            return(<div>Loading books...</div>);
        } else {
            return data.books.map(book => {
                return (
                    <li onClick={ (e) => {this.setState({selected: book.id})}} key={book.id}>{book.name}</li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <ul ud="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);