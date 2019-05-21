import React from 'react'
import { Text, View } from 'react-native'

// Make the component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    )
}

// Style the component
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        elevation: 5, // Required for shadow in Android
        position: 'relative'
    },
    textStyle: {
      fontSize: 30,
  
    }
  }

// Make this component available to other parts of the app
export { Header }