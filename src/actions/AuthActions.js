import { Actions } from 'react-native-router-flux'
import { store } from '../FireStore'
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOADING
} from './types'

export const loginUser = ({ email, password }) => {

    return dispatch => {

        showSpinner(dispatch)

        store.signIn(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                store.createUser(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(error => loginUserFail(dispatch, error, email))
            })
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
    Actions.main() //navigate to the next scene
}

const loginUserFail = (dispatch, error, email) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: { error, email }
    })
}

const showSpinner = dispatch => {
    dispatch({ type: LOADING })
}

