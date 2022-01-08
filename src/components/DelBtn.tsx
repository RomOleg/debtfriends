import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TypeDebt } from '../types/types';

interface Props {
    delDebt: (debt: TypeDebt[]) => void,
    idDebtGroup: number,
    debts: TypeDebt[],
    visible: boolean,
}

export const DelBtn: React.FC<Props> = ({ delDebt, debts, visible, idDebtGroup }) => {

    const deleteGroup = (): void => {
        const newDebts = debts.filter(debt => debt.id !== idDebtGroup);
        delDebt(newDebts)
    }

    return visible ?
        <View>
            <TouchableOpacity style={styles.container} onPress={deleteGroup}>
                <Icon name="trash"
                    size={25}
                    color="red" />
            </TouchableOpacity>

        </View>
        : null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: -8,
        // borderRadius: 50,
        // backgroundColor: '#f89',
        zIndex: 9998,
        width: 65,
        height: 65,
    },
})

export default DelBtn;