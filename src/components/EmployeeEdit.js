import React from 'react'
import { connect } from 'react-redux'
import { updateEmployee } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends React.Component {

    onPress = () => {
        console.log("Edit Mode")
    }

    render() {
        console.log('------------------------------')
        console.log('Props in EmployeeEdit', this.props)
        const { name, phone, shift } = this.props
        return <EmployeeForm
            name={name}
            phone={phone}
            shift={shift}
            buttonText='Update'
            onPress={this.onPress} />
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.employee.selectedEmployee.name,
        phone: state.employee.selectedEmployee.phone,
        shift: state.employee.selectedEmployee.shift,
        loading: state.employee.loading
    }
}

export default connect(mapStateToProps, { updateEmployee })(EmployeeEdit)