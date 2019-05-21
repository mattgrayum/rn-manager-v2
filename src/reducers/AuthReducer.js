import {
    INPUT_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOADING
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: null,
    firebaseError: null,
    msg: '',
    msgColor: '',
    user: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INPUT_CHANGED:
            const { prop, value } = action.payload
            return { ...state, [prop]: value }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                email: '',
                password: '',
                loading: false,
                error: false,
                msg: 'Success!',
                msgColor: 'green',
                user: action.payload.user
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                email: action.payload.email,
                password: '',
                loading: false,
                error: false,
                firebaseError: action.payload.error,
                msg: 'Authentication Failed',
                msgColor: 'red'
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                msg: ''
            }
        default:
            return state
    }
}