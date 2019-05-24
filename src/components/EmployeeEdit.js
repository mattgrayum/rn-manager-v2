import React from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends React.Component {

    onPress = () => {
        const { id, name, phone, shift, url } = this.props.selectedEmployee
        const { editEmployee, inputName, inputPhone, inputUrl, inputShift } = this.props
        const updatedEmployee = {
            id,
            name: inputName || name,
            phone: inputPhone || phone,
            shift: inputShift || shift,
            url: inputUrl || url
        }
        editEmployee(updatedEmployee)
    }

    render() {
        return <EmployeeForm
            selectedEmployee={this.props.selectedEmployee}
            buttonText='Update'
            onPress={this.onPress} />
    }
}

const mapStateToProps = (state) => {
    return {
        selectedEmployee: state.employee.selectedEmployee,
        inputName: state.employee.name,
        inputPhone: state.employee.phone,
        inputShift: state.employee.shift,
        inputUrl: state.employee.url,
        loading: state.employee.loading
    }
}

export default connect(mapStateToProps, { editEmployee })(EmployeeEdit)