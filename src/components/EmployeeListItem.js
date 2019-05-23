import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Card } from './common'
import { removeEmployee, selectEmployee } from '../actions/EmployeeActions'

class Employee extends React.Component {

    onRowPress = () => {

        const { selectEmployee, employee } = this.props

        selectEmployee(employee)

        Actions.employeeDetail()

    }

    render() {

        const { nameStyle } = styles
        const { name } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <Card>
                        <Text style={nameStyle}>{name}</Text>
                    </Card >
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    nameStyle: {
        flex: .5,
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default connect(null, { removeEmployee, selectEmployee })(Employee)