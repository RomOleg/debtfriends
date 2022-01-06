import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    closeModal: () => void,
}

export const CloseBtnModal: React.FC<Props> = ({ closeModal }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={closeModal}>
            <Icon name="close"
                size={25}
                color="#ccc" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 1,
        top: 1,
        zIndex: 9999,
        width: 50,
        height: 50,
    },
    btn: {
        padding: 10,
        fontSize: 30,
    },
})

export default CloseBtnModal;