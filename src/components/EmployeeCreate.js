import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends React.Component {

    onPress = () => {
        const { name, phone, shift } = this.props
        this.props.addEmployee(name, phone, shift || 'Monday')
    }

    render() {
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
        console.log('Props in EmployeeCreate', this.props)
        const { name, phone, shift } = this.props
        return <EmployeeForm
            name={name}
            phone={phone}
            shift={shift}
            buttonText='Add Employee'
            onPress={this.onPress.bind(this)} />
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.employee.name,
        phone: state.employee.phone,
        shift: state.employee.shift,
        loading: state.employee.loading
    }
}

export default connect(mapStateToProps, { addEmployee })(EmployeeCreate)