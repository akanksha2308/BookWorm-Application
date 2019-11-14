import { BOOK_DETAILS } from './../Constants/redux.constant';

export function StoreBookDetails(payload) {
    return {
        type: BOOK_DETAILS,
        payload
    };
}