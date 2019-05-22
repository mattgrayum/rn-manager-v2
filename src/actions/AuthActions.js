import { Actions } from 'react-native-router-flux'
import { signIn, createUser } from '../FireStore'
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types'
import { showSpinner } from './CommonActions'

export const loginUser = ({ email, password }) => dispatch => {

    showSpinner(dispatch)

    signIn(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => createUser(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error, email))
        )

}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
    Actions.main() //navigate to the next scene
}

const loginUserFail = (dispatch, error, email) =>
    dispatch({ type: LOGIN_USER_FAIL, payload: { error, email } })


