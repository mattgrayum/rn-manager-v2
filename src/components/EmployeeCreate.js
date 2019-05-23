import React from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'
import { inputChanged, addEmployee } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class EmployeeCreate extends React.Component {

    onAddPress = () => {
        const { name, phone, shift } = this.props
        this.props.addEmployee(name, phone, shift || 'Monday')
    }

    onEditPress = () => {
        console.log("Edit Mode")
    }

    onInputChange = (inputName, value) => {
        this.props.inputChanged({ prop: inputName, value })
    }

    renderButton = (edit) => {
        const params = edit ?
            {
                text: 'Update',
                callback: this.onEditPress
            } : {
                text: 'Add Employee',
                callback: this.onAddPress
            }

        if (this.props.loading) {
            return <Spinner />
        }
        return <Button buttonText={params.text} onPress={params.callback} />
    }

    render() {
        const { name, phone, shift } = this.props.employee
        return (
            <Card>

                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane Doe'
                        onChangeText={this.onInputChange.bind(this, 'name')}
                        value={this.props.name || name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        onChangeText={this.onInputChange.bind(this, 'phone')}
                        value={this.props.phone || phone}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column', height: 100 }}>
                    <Text style={styles.pickerLabelStyle}>Select a Shift</Text>
                    <Picker
                        prompt='Select the day of your shift'
                        selectedValue={this.props.shift || shift}
                        onValueChange={this.onInputChange.bind(this, 'shift')}
                        style={{ flex: 1, marginLeft: 15 }}
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
                    {this.renderButton(this.props.edit)}
                </CardSection>

            </Card>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.employee.name,
        phone: state.employee.phone,
        shift: state.employee.shift,
        employees: state.employee.employees,
        loading: state.employee.loading
    }
}

export default connect(
    mapStateToProps,
    {
        inputChanged,
        addEmployee
    }
)(EmployeeCreate)