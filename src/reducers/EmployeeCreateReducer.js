import {
    INPUT_CHANGED,
    EMPLOYEE_ADDED
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    employees: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_CHANGED:
            const { prop, value } = action.payload
            return { ...state, [prop]: value }
        case EMPLOYEE_ADDED:
            const { name, phone, shift } = action.payload
            return { ...state, employees: [...employees, { name, phone, shift }] }
        default:
            return state
    }
}