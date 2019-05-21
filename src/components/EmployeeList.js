import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class EmployeeList extends React.Component {
    render() {
        if (this.props.employees) {
            this.props.employees.forEach(item => {
                console.log(item)
            });
        }
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employeeCreate.employees
    }
}

export default connect(mapStateToProps)(EmployeeList)