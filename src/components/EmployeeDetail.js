import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Button, Spinner } from './common'
import { removeEmployee } from '../actions/EmployeeActions'

class EmployeeDetail extends React.Component {

    onDeletePress = () => {

        const { removeEmployee, employee } = this.props

        removeEmployee(employee.id)

    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size='large' />
        }
        return <Button buttonText="Delete" onPress={this.onDeletePress} />
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

        const { name, phone, shift, url } = this.props.employee

        return (
            <Card style={containerStyle}>
                <CardSection style={employeeSectionStyle}>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            source={{ uri: url }}
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={{ flex: .5 }}>
                        <Text style={nameStyle}>{name}</Text>
                        <View style={dataContainerStyle}>
                            <Text style={dataStyle}>{phone}</Text>
                            <Text style={dataStyle}>{shift} Shift</Text>
                        </View>
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
        height: 300,
        overflow: 'hidden',
        paddingleft: 15,
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    employeeSectionStyle: {
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
    dataContainerStyle: {
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 175,
        width: 175
    },
    thumbnailContainerStyle: {
        flex: .5,
        marginLeft: 10,
        marginRight: 10
    },
    buttonContainerStyle: {
        paddingTop: 5,
        paddingBottom: 5
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employee.selectedEmployee,
        loading: state.employee.loading
    }
}


export default connect(mapStateToProps, { removeEmployee })(EmployeeDetail)
