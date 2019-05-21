import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({ buttonText, onPress }) => {
    const {buttonStyle, textStyle} = styles
    return (
        <TouchableOpacity onPress={ onPress } style={buttonStyle}>
            <Text style={textStyle}>
                { buttonText }
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }

}

export {Button}