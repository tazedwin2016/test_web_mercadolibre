
import {
    CHANGE_SEARCH,
    SET_ITEMS,
    SET_ITEM,
    SET_CATEGORIES
} from './types';

export default (state, action) => {
    switch (action.type) {
        case CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case SET_ITEMS:
            return {
                ...state,
                items:  action.payload
            }
        case SET_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            break;
    }
}
