import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Card, CardSection, Spinner, Button } from './common'
import { removeEmployee, selectEmployee } from '../actions/EmployeeActions'

class Employee extends React.Component {

    onRowPress = () => {

        const { selectEmployee, employee } = this.props

        selectEmployee(employee)

        Actions.employeeDetail()

    }

    onDeletePress = () => {

        const { removeEmployee, employee } = this.props

        removeEmployee(employee.id)

    }

    renderButton = () => {
        if (this.props.loading) {
            return (
                <View style={noContentContainerStyle}>
                    <Spinner size='large' />
                </View>
            )
        }
        return <Button buttonText="Delete" onPress={this.onDeletePress} />
    }

    render() {

        const {
            dataStyle,
            containerStyle,
            nameStyle,
            buttonContainerStyle,
        } = styles

        const { name, phone, shift } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection style={containerStyle}>
                        <Text style={nameStyle}>
                            {name}
                        </Text>
                        <View style={{ flex: .5 }}>
                            <Text style={dataStyle}>Phone: {phone}</Text>
                            <Text style={dataStyle}>Shift: {shift}</Text>
                        </View>
                    </CardSection>
                    <CardSection style={buttonContainerStyle}>

                    </CardSection>
                </View >
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingleft: 15,
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    nameStyle: {
        flex: .5,
        fontSize: 24,
        fontWeight: '600'
    },
    dataStyle: {
        paddingBottom: 5,
        fontSize: 18
    },
    buttonContainerStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.employee.loading,
        employee: ownProps.employee
    }
}

export default connect(mapStateToProps, { removeEmployee, selectEmployee })(Employee)