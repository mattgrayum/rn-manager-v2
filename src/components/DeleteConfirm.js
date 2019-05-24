import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, CardSection, Spinner } from './common'
import { Actions } from 'react-native-router-flux'
import { removeEmployee } from '../actions/EmployeeActions'

class DeleteConfirm extends React.Component {

    onPress = () => this.props.removeEmployee(this.props.id)

    renderDeleteButton = () => {
        const { loading } = this.props

        if (loading) { return <Spinner size='large' /> }
        return <Button
            buttonText="Delete"
            onPress={this.onPress}
            customButtonStyle={styles.deleteButtonStyle}
            customTextStyle={{ color: 'white' }} />
    }

    render() {
        const { containerStyle, textStyle } = styles
        return (
            <View style={containerStyle}>
                <Card>
                    <CardSection>
                        <Text style={textStyle}>Are you sure you want to delete this Employee?</Text>
                    </CardSection>
                    <CardSection>
                        {this.renderDeleteButton()}
                        <Button buttonText="Cancel" onPress={() => Actions.pop()} />
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    deleteButtonStyle: {
        backgroundColor: 'red',
        color: 'white',
        borderColor: 'red'
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}

const mapStateToProps = state => {
    return {
        id: state.employee.selectedEmployee.id,
        loading: state.employee.loading
    }
}

export default connect(mapStateToProps, { removeEmployee })(DeleteConfirm)