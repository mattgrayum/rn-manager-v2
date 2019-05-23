import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Card, CardSection, Spinner, Button } from './common'
import { removeEmployee } from '../actions/EmployeeActions'

class Employee extends React.Component {

    onPress = () => {

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
        return <Button buttonText="Delete" onPress={this.onPress} />
    }

    render() {

        const {
            dataStyle,
            containerStyle,
            nameStyle,
            buttonContainerStyle,
        } = styles

        const { id, name, phone, shift } = this.props.employee

        return (
            <Card key={id}>
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
                    {this.renderButton()}
                </CardSection>
            </Card >
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

export default connect(mapStateToProps, { removeEmployee })(Employee)