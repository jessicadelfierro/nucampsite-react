import { CAMPSITES } from '../shared/campsites';

//reducer function to handle each part of the state
//all reducers take 2 paramenters
//first parameter takes the previous state (or existing/current) aka the state thats already in the store and is going to be changed
//second paramenter takes an action object
export const Campsites = (state = CAMPSITES, action) => {
    switch(action.type) {
        default:
            return state;
    }
};