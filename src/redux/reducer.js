// moving the responsibilty for the state from the main component to redux
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

// if there is no state passed in then the state gets set to the initialState object
export const Reducer = (state = initialState, action) => {
    return state;
};