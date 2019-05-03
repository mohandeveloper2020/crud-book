function addBook(payload) {
    return {
        type: 'ADD_BOOK',
        payload
    }
}

function deleteBook(payload) {
    return {
        type: 'DELETE_BOOK',
        payload
    }
}

function updateBook(payload) {
    return {
        type: 'UPDATE_BOOK',
        payload
    }
}

function viewThisBook(payload) {
    return {
        type: 'VIEW_BOOK',
        payload
    }
}

export {
    addBook,
    deleteBook,
    updateBook,
    viewThisBook
}