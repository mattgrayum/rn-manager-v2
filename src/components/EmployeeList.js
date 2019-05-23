import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Spinner } from './common'
import { getEmployees, removeEmployee } from '../actions/EmployeeActions'
import Employee from './Employee'

class EmployeeList extends React.Component {

    componentWillMount() {
        this.props.getEmployees()
    }

    renderEmployees() {
        const { noContentContainerStyle, scrollViewstyle } = styles
        const { loading, employees } = this.props

        if (loading) {
            return (
                <View style={noContentContainerStyle}>
                    <Spinner size='large' />
                </View>
            )
        }
        else {
            if (!employees) {
                return (
                    <View style={noContentContainerStyle}>
                        <Text>There are no employees to display</Text>
                    </View>
                )
            }
            return employees.map(e => <Employee employee={e} />)
        }
    }

    render() {
        return (
            <ScrollView style={scrollViewstyle}>
                {this.renderEmployees()}
            </ScrollView>
        )
    }
}

const styles = {
    noContentContainerStyle: {
        flex: 1,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewstyle: {
        flexGrow: 1
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employee.employees,
        loading: state.employee.loading
    }
}

export default connect(
    mapStateToProps,
    { getEmployees, removeEmployee }
)(EmployeeList)