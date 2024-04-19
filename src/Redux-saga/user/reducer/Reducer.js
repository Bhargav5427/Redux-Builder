import { DELETE_USER_ERROR, DELETE_USER_PENDING, DELETE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS } from "../Action";
import { GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_PENDING, POST_USER_SUCCESS } from "../action/Action"

let initialstate = {

    user: [],
    isLoading: false,
    isError: null,
}

let userReducer = (state = initialstate, action) => {
    console.log(action, "Reducer action");
    switch (action.type) {
        case GET_USER_PENDING: {
            return {
                isLoading: true,
                ...state
            };
        }
        case GET_USER_SUCCESS: {
            return {
                isLoading: false,
                user: action.data,
            };
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                isError: action.data,
            };
        }
        case POST_USER_PENDING: {
            return {
                isLoading: true,
                ...state,
            };
        }
        case POST_USER_SUCCESS: {
            return {
                isLoading: false,
                user: state.user.concat(action.data),
            };
        }
        case POST_USER_ERROR: {
            return {
                ...state,
                isError: action.data
            };
        }
        case DELETE_USER_PENDING: {
            return {
                isLoading: true,
                ...state,
            };
        }
        case DELETE_USER_SUCCESS: {
            return {
                isLoading: false,
                user: state.user.filter((val) => val.id !== action.data.id),
            };
        }
        case DELETE_USER_ERROR: {
            return {
                ...state,
                isError: action.data
            };
        }
        case UPDATE_USER_PENDING: {
            return {
                isLoading: true,
                ...state,
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                isLoading: false,
                user: state.user.map((update) => {
                    if (update.id == action.data.id)
                        return {
                            ...update,
                            ...action.data,
                        }
                    else {
                        return update;
                    }
                }),
            };
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                isError: action.data
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default userReducer;