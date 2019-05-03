export default function(state = [], action) {

    switch(action.type) {

        case 'VIEW_BOOK': {
            // console.log(action.payload);
            return action.payload;
        }

        default:
            return state;
    }
}