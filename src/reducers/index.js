import { combineReducers } from 'redux';

import addBooks from 'reducers/addBooks/';
import editBooks from 'reducers/editBooks/';
import viewBooks from 'reducers/viewBooks/';

export default combineReducers(
    {
        addBooks,
        editBooks,
        viewBooks
    }
);