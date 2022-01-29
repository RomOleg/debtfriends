import React from 'react'
import { StyleProp, StyleSheet, TextInput, TextStyle, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import location from '../location/location';

interface Props {
    value: string,
    onChangeText: (value: string) => void,
    placeholder?: string,
    inputStyle?: StyleProp<TextStyle>,
    props?: TextInputProps,
}

export const BaseTextInput: React.FC<Props> = ({ value, onChangeText, placeholder, inputStyle, props }) => {

    return (
        <TextInput
            style={[styles.textInput, inputStyle]}
            value={value}
            onChangeText={(name) => onChangeText(name)}
            placeholder={placeholder || ''}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderRadius: 10,
        minWidth: '60%',
        minHeight: 50
      }
})

export default BaseTextInput;