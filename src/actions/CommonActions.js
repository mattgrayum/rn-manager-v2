import { INPUT_CHANGED, LOADING } from './types'

export const inputChanged = ({ prop, value }) => {
    return {
        type: INPUT_CHANGED,
        payload: { prop, value }
    }
}

export const showSpinner = dispatch => dispatch({ type: LOADING })