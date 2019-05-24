import React from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'
import { inputChanged } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class EmployeeForm extends React.Component {

    onInputChange = (inputName, value) => {
        this.props.inputChanged({ prop: inputName, value })
    }

    renderButton = () => {
        const { buttonText, onPress, loading } = this.props

        if (loading) {
            return <Spinner size='large' />
        }
        return <Button buttonText={buttonText} onPress={onPress} />
    }

    render() {
        const { selectedEmployee, name, phone, shift } = this.props
        const { pickerLabelStyle, pickerStyle } = styles
        let inputName, inputPhone, inputShift = ''
        if (selectedEmployee) {
            inputName = name || selectedEmployee.name
            inputPhone = phone || selectedEmployee.phone
            inputShift = shift || selectedEmployee.shift
        }
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane Doe'
                        onChangeText={this.onInputChange.bind(this, 'name')}
                        value={inputName}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        onChangeText={this.onInputChange.bind(this, 'phone')}
                        value={inputPhone}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column', height: 100 }}>
                    <Text style={pickerLabelStyle}>Select a Shift</Text>
                    <Picker
                        prompt='Select the day of your shift'
                        selectedValue={inputShift}
                        onValueChange={this.onInputChange.bind(this, 'shift')}
                        style={pickerStyle}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card >
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    pickerStyle: {
        flex: 1,
        marginLeft: 15
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

export default connect(mapStateToProps, { inputChanged })(EmployeeForm)