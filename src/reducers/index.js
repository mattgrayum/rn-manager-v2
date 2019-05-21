import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeCreateReducer from './EmployeeCreateReducer'

export default combineReducers({
    auth: AuthReducer,
    employeeCreate: EmployeeCreateReducer
})