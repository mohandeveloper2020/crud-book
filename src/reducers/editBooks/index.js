export default function(state = null, action) {
    switch(action.type) {

        case 'EDIT_BOOK': {
            // console.log(action.payload);
            return action.payload;
        }

        case 'UPDATE_BOOK': {
            return null;
        }

        default:
            return state;
    }
}