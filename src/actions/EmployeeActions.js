import { Actions } from 'react-native-router-flux'
import { createEmployee, getUserEmployees, deleteEmployee } from '../FireStore'
import { EMPLOYEE_ADDED, EMPLOYEES_RETRIEVED, EMPLOYEE_DELETED, EMPLOYEE_SELECTED } from './types'
import { showSpinner } from './CommonActions'

export const addEmployee = (name, phone, shift) => dispatch => {

    showSpinner(dispatch)

    getPhotoUrl()
        .then(url => {
            createEmployee(name, phone, shift, url)
                .then(employeeRef => {
                    dispatch({
                        type: EMPLOYEE_ADDED,
                        payload: {
                            id: employeeRef.id,
                            name, phone, shift, url
                        }
                    })
                    Actions.employeeList({ type: 'reset' })
                })
                .catch(error => console.log('addEmployee: ', error))
        })
        .catch(error => console.log('getPhotoUrl: ', error))

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
        .then(() => {
            dispatch({ type: EMPLOYEE_DELETED, payload: id })
            Actions.employeeList({ type: 'reset' })
        })
        .catch(error => console.log('removeEmployee:', error))

}

export const selectEmployee = employee => {
    return {
        type: EMPLOYEE_SELECTED,
        payload: employee
    }
}

const getPhotoUrl = () => {
    const url = 'https://uifaces.co/api?limit=1&random'
    return fetch(url, { headers: { 'X-API-KEY': '1cdeb6f841dd299a520b50c296252f' } })
        .then(response => {
            const profile = JSON.parse(response._bodyInit)[0]
            return profile.photo
        })
        .catch(error => console.log('fetchProfileUrl:', error))
}



