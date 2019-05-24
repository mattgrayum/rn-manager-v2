import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Button, Spinner } from './common'
import { removeEmployee } from '../actions/EmployeeActions'
import { Actions } from 'react-native-router-flux';

class EmployeeDetail extends React.Component {

    onEditPress = () => Actions.employeeEdit()

    onDeletePress = () => Actions.deleteConfirm()

    renderButton = (text, callback) => {
        if (this.props.loading) { return <Spinner size='large' /> }
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

        const { selectedName, selectedPhone, selectedShift, selectedUrl } = this.props

        return (

            <Card style={containerStyle}>
                <CardSection style={employeeSectionStyle}>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            source={{ uri: selectedUrl }}
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={{ flex: .5, paddingLeft: 10 }}>
                        <Text style={nameStyle}>{selectedName}</Text>
                        <View style={dataContainerStyle}>
                            <Text style={dataStyle}>{selectedPhone}</Text>
                            <Text style={dataStyle}>{selectedShift} Shift</Text>
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
        id: state.employee.selectedEmployee.id,
        selectedName: state.employee.selectedEmployee.name,
        selectedPhone: state.employee.selectedEmployee.phone,
        selectedShift: state.employee.selectedEmployee.shift,
        selectedUrl: state.employee.selectedEmployee.url,
        loading: state.employee.loading
    }
}


export default connect(mapStateToProps, { removeEmployee })(EmployeeDetail)
