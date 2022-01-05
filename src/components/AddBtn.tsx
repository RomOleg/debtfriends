import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    
}

export const AddBtn: React.FC<Props> = ({  }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => {alert('add btn')}}>
            <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 35,
        bottom: 35,
        borderRadius: 50,
        backgroundColor: '#fff',
        zIndex: 9999,
        width: 70,
        height: 70,
    },
    btn: {
        padding: 10,
        fontSize: 30, 
    },
})

export default AddBtn;