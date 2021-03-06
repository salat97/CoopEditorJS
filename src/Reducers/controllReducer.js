import * as actionTypes from '../Actions/actionTypes';

const defaultState = () => ({
    errorOccured: false,
    errorMessage: ''
});

const controllReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case actionTypes.ERROR_MESSAGE_RECEIVED:
            return {
                ...state,
                errorOccured: true,
                errorMessage: action.message.Content
            }

        case actionTypes.SOCKET_ERROR_OCCURED: 
            return {
                ...state,
                errorOccured: true,
                errorMessage: action.errorMessage
            } 

        case actionTypes.HIDE_ERROR_INFO:
            return {
                ...state,
                errorOccured: false,
                errorMessage: ''
            }

        default:
            return state;
    }
};

export default controllReducer;