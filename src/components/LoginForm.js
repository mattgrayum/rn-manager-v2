import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner, Message } from './common'
import { inputChanged, loginUser } from '../actions'

class LoginForm extends React.Component {

    onPress = () => {
        const { email, password, loginUser } = this.props
        loginUser({ email, password })
    }

    onInputChanged = (inputName, value) => {
        this.props.inputChanged({ prop: inputName, value })
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner />
        }
        return <Button buttonText="Login" onPress={this.onPress} />
    }

    render() {
        const { email, password, msg, msgColor } = this.props
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            onChangeText={
                                this.onInputChanged.bind(this, 'email')
                            }
                            label="Email"
                            placeholder="email@gmail.com"
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            onChangeText={
                                this.onInputChanged.bind(this, 'password')
                            }
                            secureTextEntry
                            label="Password"
                            placeholder="Secure password"
                            value={this.props.password}
                        />
                    </CardSection>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
                <Message
                    msg={msg}
                    msgColor={msgColor}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error,
        msg: state.auth.msg,
        msgColor: state.auth.msgColor
    }
}

export default connect(
    mapStateToProps,
    {
        inputChanged,
        loginUser
    }
)(LoginForm)