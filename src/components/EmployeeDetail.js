import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Button, Spinner } from './common'
import { removeEmployee } from '../actions/EmployeeActions'
import { Actions } from 'react-native-router-flux';

class EmployeeDetail extends React.Component {

    onEditPress = () => {
        const { name, phone, shift } = this.props
        Actions.employeeEdit({ name, phone, shift })
    }

    onDeletePress = () => {

        const { removeEmployee, employee } = this.props

        removeEmployee(employee.id)

    }

    renderButton = (text, callback) => {
        if (this.props.loading) {
            return <Spinner size='large' />
        }
        return <Button buttonText={text} onPress={callback} />
    }

    render() {

        const {
            dataStyle,
            dataContainerStyle,
            containerStyle,
            employeeSectionStyle,
            nameStyle,
            thumbnailContainerStyle,
            thumbnailStyle,
            buttonContainerStyle,
        } = styles

        const { name, phone, shift, url } = this.props
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        console.log('Props in EmployeeDetail', this.props)
        return (

            <Card style={containerStyle}>
                <CardSection style={employeeSectionStyle}>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            source={{ uri: url }}
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={{ flex: .5, paddingLeft: 10 }}>
                        <Text style={nameStyle}>{name}</Text>
                        <View style={dataContainerStyle}>
                            <Text style={dataStyle}>{phone}</Text>
                            <Text style={dataStyle}>{shift} Shift</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection style={buttonContainerStyle}>
                    {this.renderButton('Edit', this.onEditPress)}
                </CardSection>
                <CardSection style={buttonContainerStyle}>
                    {this.renderButton('Delete', this.onDeletePress)}
                </CardSection>
            </Card >
        )
    }
}


const styles = {
    containerStyle: {
        height: 300,
        overflow: 'hidden',
        paddingleft: 15,
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    employeeSectionStyle: {
        flex: 1,
        flexDirection: 'row'
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
    dataContainerStyle: {
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 150,
        width: 150
    },
    thumbnailContainerStyle: {
        flex: .5
    },
    buttonContainerStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
}

const mapStateToProps = state => {
    return {
        name: state.employee.selectedEmployee.name,
        phone: state.employee.selectedEmployee.phone,
        shift: state.employee.selectedEmployee.shift,
        url: state.employee.selectedEmployee.url,
        loading: state.employee.loading
    }
}


export default connect(mapStateToProps, { removeEmployee })(EmployeeDetail)
