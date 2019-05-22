import { createEmployee } from '../FireStore'
import { EMPLOYEE_ADDED } from './types'

export const addEmployee = (name, phone, shift) => {

    return dispatch => {
        createEmployee(name, phone, shift)
            .then(() => {
                dispatch({
                    type: EMPLOYEE_ADDED,
                    payload: { name, phone, shift }
                })
            })
            .catch(error => console.log('addEmployee: ', error))
    }
}