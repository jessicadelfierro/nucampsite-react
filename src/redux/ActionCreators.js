// * acts as a wildcard that lets us import all the named exports from actiontypes.js file
import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        //when identifier of a property is the same as its value, you do not need to add the identifer (campsiteId: campsiteId === campsiteId)
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});