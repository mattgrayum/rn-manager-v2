import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ 
    label, 
    onChangeText, 
    value, 
    placeholder,
    secureTextEntry
}) => {

    const { 
        inputStyle,
        labelStyle,
        containerStyle
    } = styles

    return(
        <View style={ containerStyle }>
            <Text style={ labelStyle }>{ label }</Text>
            <TextInput 
                secureTextEntry={ secureTextEntry }
                autoCorrect={false}
                placeholder={ placeholder }
                style={ inputStyle }
                onChangeText={ onChangeText }    
                value={ value }
            />
        </View>
        
    )
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        height: 40,
        flex: 1,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    inputStyle: {
        flex: 2,
        paddingRight: 5,
        paddingLeft: 5,
        color: '#000',
        fontSize: 18,
        lineHeight: 23
    }
}

export { Input }