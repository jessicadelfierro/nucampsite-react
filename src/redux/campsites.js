import * as ActionTypes from './ActionTypes'

//reducer function to handle each part of the state
//all reducers take 2 paramenters
//first parameter takes the previous state (or existing/current) aka the state thats already in the store and is going to be changed
//second paramenter takes an action object
export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    },  action) => {
    switch(action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};