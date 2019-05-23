import {
    INPUT_CHANGED,
    EMPLOYEE_ADDED,
    EMPLOYEES_RETRIEVED,
    EMPLOYEE_DELETED,
    LOADING
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    employees: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_CHANGED:
            const { prop, value } = action.payload
            return { ...state, [prop]: value }
        case EMPLOYEE_ADDED:
            const { name, phone, shift } = action.payload
            return {
                ...state,
                employees: [...state.employees, { id, name, phone, shift }],
                name: '',
                phone: '',
                shift: 'Monday'
            }
        case EMPLOYEES_RETRIEVED:
            return {
                ...state,
                employees: action.payload,
                loading: false
            }
        case EMPLOYEE_DELETED:
            console.log(action.payload)
            return {
                ...state,
                employees: state.employees.filter(e => e !== action.payload)
            }
        case LOADING:
            return { ...state, loading: true }
        default:
            return state
    }
}