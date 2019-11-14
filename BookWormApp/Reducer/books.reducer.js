import { BOOK_DETAILS } from './../Constants/redux.constant';

const initialState = {
    bookData: []
}

/**
 * Reducer for fetching User detail 
 * @param  {array} state=[]
 * @param  {object} action
 */
function BookDetails(state = initialState, action = {}) {

    switch (action.type) {
        case BOOK_DETAILS:
            return [...action.payload];

        default:
            return state;
    }
}

export default BookDetails;

