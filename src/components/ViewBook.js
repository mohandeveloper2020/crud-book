import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ViewBook extends Component {
    render() {
        let { books } = this.props;
        // console.log(books);
        
        return(
            <div className={'col-8 mx-auto'}>
                <div className="jumbotron my-3 pt-4 pb-3 shadow bg-white">
                    <h1 className="display-4">{books.title}</h1>
                    <p className="lead">{books.desc}</p>
                    <p>
                        <span className="text-muted">Author: </span> 
                        <span className="font-weight-bold">{books.author}</span>
                    </p>
                    <hr className="my-4" />

                    <Link
                        to={'/'}
                        className={'btn btn-sm btn-outline-secondary'}>
                            <i className="fas fa-arrow-left mr-2"></i>
                            {'Back to List'}
                    </Link>
                </div>
            </div>
        )
    }
};

export default connect( (state) =>
    {
        return {
            books: state.viewBooks
        }
    }, {}
)(ViewBook);