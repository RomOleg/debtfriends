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
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 18,
    }
})

export default DebtItem;