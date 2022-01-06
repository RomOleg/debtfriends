import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TypeDebt } from '../types/types';

interface Props {
    debt: TypeDebt,
    goto: (debt: TypeDebt) => void,
}

export const DebtItem: React.FC<Props> = ({ debt, goto }) => {

    return (
        <TouchableOpacity onPress={() => goto(debt)}>
            <Text style={styles.itemDebt}>{debt.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemDebt: {
        fontSize: 18,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginBottom: 1
    }
})

export default DebtItem;