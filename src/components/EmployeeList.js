import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Card, CardSection, Spinner, Button } from './common'
import { getEmployees } from '../actions/EmployeeCreateActions'

class EmployeeList extends React.Component {

    componentWillMount() {
        this.props.getEmployees()
    }

    onPress = () => console.log("Are you sure you want to delete this employee?")

    renderEmployees() {

        const {
            employeeDataStyle,
            employeeSectionStyle,
            employeeNameStyle,
            buttonSectionStyle
        } = styles

        if (this.props.loading) {

            return (
                <View style={{ flex: 1, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner size='large' />
                </View>
            )

        }
        return this.props.employees.map(item => (
            <Card key={item.name + item.phone}>

                <CardSection style={employeeSectionStyle}>
                    <Text style={employeeNameStyle}>
                        {item.name}
                    </Text>
                    <View style={{ flex: .5 }}>
                        <Text style={employeeDataStyle}>Phone: {item.phone}</Text>
                        <Text style={employeeDataStyle}>Shift: {item.shift}</Text>
                    </View>
                </CardSection>

                <CardSection style={buttonSectionStyle}>
                    <Button buttonText="Delete" onPress={this.onPress} />
                </CardSection>

            </Card >

        ))
    }
    render() {

        return (
            <ScrollView style={{ flexGrow: 1 }}>
                {this.renderEmployees()}
            </ScrollView>

        )
    }
}

const styles = {
    employeeSectionStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingleft: 15,
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    employeeNameStyle: {
        flex: .5,
        fontSize: 24,
        fontWeight: '600'
    },
    employeeDataStyle: {
        paddingBottom: 5,
        fontSize: 18
    },
    buttonSectionStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employeeCreate.employees,
        loading: state.employeeCreate.loading
    }
}

export default connect(mapStateToProps, { getEmployees })(EmployeeList)