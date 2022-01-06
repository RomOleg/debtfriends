import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import location from '../location/location';

interface Props {
    onPress: () => void,
}

export const BaseButton: React.FC<Props> = ({ onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text} >{location['ru'].AddNewGroup}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#f87',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
    }
})

export default BaseButton;