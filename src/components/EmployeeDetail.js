import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Button, Spinner } from './common'

class EmployeeDetail extends React.Component {
    render() {

        const { id, name, phone, shift } = this.props.employee

        return (
            <View>
                <Text>ID: {id}</Text>
                <Text>Name: {name}</Text>
                <Text>Phone: {phone}</Text>
                <Text>Shift: {shift}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employee.selectedEmployee
    }
}

export default connect(mapStateToProps)(EmployeeDetail)
