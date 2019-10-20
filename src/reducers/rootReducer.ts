import * as types from "../types/ActionTypes";

const initialState = { path: 'path_init' };

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.ADD:
			return { ...state,  path: action.path };		
        default:
            return state;
    }
};

export default rootReducer;