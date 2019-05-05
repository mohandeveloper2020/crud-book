import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BookImg from 'images/book_stack.png'

import { deleteBook, viewThisBook } from 'actions/addActions/';
import { editBook } from 'actions/editActions/';

class BooksList extends Component {

    handleDelete(ind) {
        this.props.deleteBook(ind);
    }

    handleEdit(book) {
        this.props.editBook(book);
        this.props.history.push('/AddBooks');
    }

    handleViewBook(book) {
        this.props.viewThisBook(book);
    }

    render() {
        let { books } = this.props;
        // console.log(books);

        return(
            <div className={'container-fluid mt-3'}>
                <p className={'mb-0 text-center'}>
                    Books Available
                    <Link to={'/AddBooks'} className={'ml-3 btn btn-sm btn-info float-right'}>
                        <i className="fas fa-plus mr-2"></i>
                        {'Add new'}
                    </Link>       
                </p>

                <hr className={''}/>
                <div className="row">
                    {books.length > 0 ? books.map((book, ind) =>
                        <div className="col-4 my-3" key={ind}>
                            <div className="card shadow">
                                <div className="card-header">
                                    <h5 className={'mb-0'}>{book.title}</h5>
                                </div>
                                <div className="card-body py-3">
                                    <p className="card-text">{book.desc}</p>  
                                    <p className="card-text font-italic text-muted mb-1">{book.author}</p>
                                </div>
                                <div className="card-footer">
                                    <Link
                                        to={`/EditBook/${book.id}`}
                                        className={'btn btn-sm btn-outline-secondary mr-2'}
                                        onClick={this.handleEdit.bind(this, book)} >
                                            <i className="fas fa-pen"></i>
                                            {/* {'Edit'} */}
                                    </Link>

                                    <button 
                                        className={'btn btn-sm btn-outline-secondary'}
                                        onClick={this.handleDelete.bind(this, ind)} >
                                            <i class="fas fa-trash"></i>
                                            {/* {'Delete'} */}
                                    </button>

                                    <Link 
                                        to={`/ViewBook/${book.id}`} 
                                        className="card-link float-right"
                                        onClick={this.handleViewBook.bind(this, book)} >
                                            <i class="fas fa-eye"></i>
                                            {/* {'View more'} */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    :   <div className={'no-stock'}>
                            <img src={BookImg} alt={'book img'} className={'mr-3'}/>
                            <h3>{'No Stock :('}</h3>
                        </div>
                    }
                </div>
            </div>
        )
    }
};

export default connect((state) =>
    {
        return {
            books: state.addBooks
        }
    }, {
        deleteBook,
        editBook,
        viewThisBook
    }
)(BooksList);