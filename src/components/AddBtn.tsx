import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    showModal: () => void,
}

export const AddBtn: React.FC<Props> = ({ showModal }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={showModal}>
            <Icon name="plus"
                size={25}
                color="#fff" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 50,
        backgroundColor: '#f89',
        zIndex: 9999,
        width: 65,
        height: 65,
    },
    btn: {
        padding: 10,
        fontSize: 30, 
    },
})

export default AddBtn;