import { Actions } from 'react-native-router-flux'
import { createEmployee, getUserEmployees, deleteEmployee } from '../FireStore'
import { EMPLOYEE_ADDED, EMPLOYEES_RETRIEVED, EMPLOYEE_DELETED } from './types'
import { showSpinner } from './CommonActions'

export const addEmployee = (name, phone, shift) => dispatch => {

    showSpinner(dispatch)

    createEmployee(name, phone, shift)
        .then(employeeRef => {
            dispatch({
                type: EMPLOYEE_ADDED,
                payload: {
                    id: employeeRef.id,
                    name, phone, shift
                }
            })
            Actions.employeeList({ type: 'reset' })
        })
        .catch(error => console.log('addEmployee: ', error))

}

export const getEmployees = () => dispatch => {

    showSpinner(dispatch)

    getUserEmployees()
        .then(employees => dispatch({
            type: EMPLOYEES_RETRIEVED,
            payload: employees
        }))
        .catch(error => console.log('getUserEmployees: ', error))

}

export const removeEmployee = id => dispatch => {

    showSpinner(dispatch)

    deleteEmployee(id)
        .then(() => dispatch({ type: EMPLOYEE_DELETED, payload: id }))
        .catch(error => console.log('removeEmployee:', error))

}



