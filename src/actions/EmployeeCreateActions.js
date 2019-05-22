import { Actions } from 'react-native-router-flux'
import { createEmployee, getUserEmployees } from '../FireStore'
import { EMPLOYEE_ADDED, EMPLOYEES_RETRIEVED } from './types'
import { showSpinner } from './CommonActions'

export const addEmployee = (name, phone, shift) => dispatch => {

    showSpinner(dispatch)

    createEmployee(name, phone, shift)
        .then(employeeRef => {
            //console.log('employee id: ', employeeRef.id)
            dispatch({
                type: EMPLOYEE_ADDED,
                payload: {
                    id: employeeRef.id,
                    name,
                    phone,
                    shift
                }
            })
            Actions.employeeList()
        })
        .catch(error => console.log('addEmployee: ', 'error'))

}

export const getEmployees = () => dispatch => {

    showSpinner(dispatch)

    getUserEmployees()
        .then(employees => {
            console.log('employees:', employees)
            dispatch({
                type: EMPLOYEES_RETRIEVED,
                payload: employees
            })
        }

        )
        .catch(error => console.log('getUserEmployees: ', 'error'))

}



