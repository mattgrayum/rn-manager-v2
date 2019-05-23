import React from 'react'
import { connect } from 'react-redux'
import { FlatList, ScrollView, View, Text } from 'react-native'
import { Spinner } from './common'
import { getEmployees, removeEmployee } from '../actions/EmployeeActions'
import Employee from './EmployeeListItem'

class EmployeeList extends React.Component {

    componentWillMount() {
        this.props.getEmployees()
    }

    renderEmployees() {
        const { noContentContainerStyle } = styles
        const { loading, employees } = this.props

        if (loading) {
            return (
                <View style={noContentContainerStyle}>
                    <Spinner size='large' />
                </View>
            )
        }
        else {
            if (!employees.length) {
                return (
                    <View style={noContentContainerStyle}>
                        <Text>There are no employees to display</Text>
                    </View>
                )
            }
            return <FlatList
                data={employees}
                renderItem={({ item }) => <Employee key={item.id} employee={item} />}
                keyExtractor={employees => employees.id.toString()}
            />
        }
    }

    render() {
        return this.renderEmployees()
    }
}

const styles = {
    noContentContainerStyle: {
        flex: 1,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
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