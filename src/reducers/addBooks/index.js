export default function(
    state = [
        {
            id: 1,
            title: 'Design Thinking', 
            desc: "The 12 Indispensable Elements for Design Thinking Workshops. I found a good solution that uses the maxlength attribute if the browser supports it.",            
            author: 'Tim Brown'            
        },
        {
            id: 2,
            title: 'The Design of Everyday things',            
            desc: "Don Norman is a voyeur, always watching, always on the lookout for some common-day ..... Explorations in cognition (A Series of books in psychology).",            
            author: 'Don Norman'
        }
    ], 
    action) {

    let books = JSON.parse(JSON.stringify(state));

    switch(action.type) {

        case 'ADD_BOOK': {
            // console.log(action.payload)
            let newData = action.payload;
            newData.id = Math.floor(Math.random() * 10000);
            books.push(newData);
            return books;
        }

        case 'DELETE_BOOK': {
            // console.log(action.payload)
            let delInd = action.payload;
            books.splice(delInd, 1);
            return books;
        }

        case 'UPDATE_BOOK': {
            // console.log(action.payload);
            let updatedBook = action.payload;
            books = books.map((book) => {
                if(book.id === updatedBook.id) {
                    return updatedBook;
                }
                return book;
            });
            return books;
        }

        default:
            return state;
    }
}