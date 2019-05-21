import React from 'react'
import { Text } from 'react-native'

class Message extends React.Component {
    render() {
        return <Text style={this.styles.msgTextStyle()}>{this.props.msg}</Text>
    }

    styles = {
        msgTextStyle: () => {
            return {
                fontSize: 20,
                alignSelf: 'center',
                paddingTop: 20,
                color: this.props.msgColor || 'black'
            }
        }
    }
}

export { Message }