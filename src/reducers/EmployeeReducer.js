import {
    INPUT_CHANGED,
    EMPLOYEE_ADDED,
    EMPLOYEES_RETRIEVED,
    EMPLOYEE_DELETED,
    EMPLOYEE_SELECTED,
    LOADING
} from '../actions/types'


const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    employees: [],
    loading: false,
    selectedEmployee: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_CHANGED:
            const { prop, value } = action.payload
            return { ...state, [prop]: value }
        case EMPLOYEE_ADDED:
            const { id, name, phone, shift } = action.payload
            return {
                ...state,
                employees: [...state.employees, { id, name, phone, shift }],
                name: '',
                phone: '',
                shift: 'Monday',
                loading: false
            }
        case EMPLOYEES_RETRIEVED:
            return {
                ...state,
                employees: action.payload,
                loading: false
            }
        case EMPLOYEE_DELETED:
            return {
                ...state,
                loading: false,
                employees: state.employees.filter(e => e.id !== action.payload)
            }
        case EMPLOYEE_SELECTED:
            return { ...state, selectedEmployee: action.payload }
        case LOADING:
            return { ...state, loading: true }
        default:
            return state
    }
}