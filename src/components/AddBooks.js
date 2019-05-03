import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addBook, updateBook } from 'actions/addActions/';

class AddBooks extends Component {
    constructor(props) {
        super(props);

        let id='', title = '', desc = '', author = '';

        let { editData } = this.props;
        if(editData) {
            id = editData.id;
            title = editData.title;
            desc = editData.desc;
            author = editData.author;
        }

        this.state = {
            id, title, desc, author
        } 
    }

    handleChange(field, {target}) {
        this.setState({
            [field]: target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { id, title, desc, author } = this.state;
        let { editData } = this.props;

        if(!title || !desc || !author) {
            alert('All fields are mandatory!')
        } else if(editData) {
            this.props.updateBook({
                id: editData.id, 
                title, desc, author
            })

            this.props.history.push('/');

        } else {
            this.props.addBook({
                id, title, desc, author
            })

            this.props.history.push('/');
        }        

        let {titleInput, descInput, authorInput } = this.refs;

        if(titleInput.value === '') {
            ReactDOM.findDOMNode(titleInput).focus();
        } else if(descInput.value === '') {
            ReactDOM.findDOMNode(descInput).focus();
        } else if(authorInput.value === '') {
            ReactDOM.findDOMNode(authorInput).focus();
        } 
    }

    render() {
        let { title, desc, author } = this.state;
        let { editData } = this.props;

        return(
            <div className={'container-fluid mt-4'}>
                <div className={'col-4 mx-auto bg-white p-3 rounded-lg shadow'}>
                    <h4 className={'text-center'}>
                        {editData ? 'Update this book' : 'Add new book'}
                    </h4>
                    <hr className={'my-1'}/>
                    <small className="text-muted">All fields are mandatory</small>

                    <form 
                        className="mt-3"
                        onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group mb-4">
                            <label>{'Book Title'}</label>
                            <input 
                                type="text"
                                value={title}
                                autoFocus
                                ref={'titleInput'} 
                                className="form-control" 
                                placeholder="Enter book title"
                                onChange={this.handleChange.bind(this, 'title')} />
                        </div>

                        <div className="form-group mb-4">
                            <label>
                                {'Book Description '}
                                <small className="text-muted font-italic">(max 150 chars)</small>
                            </label>
                            <textarea 
                                className="form-control"
                                value={desc}
                                ref={'descInput'} 
                                rows="3"
                                maxLength="150" 
                                placeholder="Enter book description"
                                onChange={this.handleChange.bind(this, 'desc')} >
                            </textarea>
                        </div>

                        <div className="form-group mb-4">
                            <label>{'Author Name'}</label>
                            <input 
                                type="text"
                                value={author}
                                ref={'authorInput'} 
                                className="form-control" 
                                placeholder="Enter author name" 
                                onChange={this.handleChange.bind(this, 'author')} />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary mr-3">
                                {editData ? 'Update Book' : 'Add Book'}
                        </button>

                        <Link 
                            to={'/'}                           
                            className="btn btn-light">
                                {'Cancel'}
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
};

export default connect((state) =>
    {
        return {
            editData: state.editBooks
        }
    },
    {
        addBook,
        updateBook
    }

)(AddBooks);