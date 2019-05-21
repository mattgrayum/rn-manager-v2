import React from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import {Card, CardSection, Button, Input, Spinner } from './common'

class LogoutForm extends React.Component{

    onPress = () => {
        firebase.auth().signOut()
    }

    renderButton = () => {

        return (
            <Button 
                buttonText="Log Out"
                onPress={ this.onPress.bind(this) }
            />
        )
    }

    render() {

        return (
            <View>
                <Card>
                    <CardSection>
                        { this.renderButton() }
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default LogoutForm