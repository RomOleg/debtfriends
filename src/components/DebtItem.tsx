import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TypeDebt } from '../types/types';
import { DelBtn } from './DelBtn';
import { showBtnDelete } from '../store/actions/visibleActions';
import { connect } from 'react-redux';

interface Props {
    debtGroup: TypeDebt,
    goto: (debtGroup: TypeDebt) => void,
    showBtnDelete: () => void,
}

export const DebtItem: React.FC<Props> = ({ debtGroup, goto, showBtnDelete }) => {

    return (
        <TouchableOpacity onPress={() => goto(debtGroup)} onLongPress={showBtnDelete} >
            <View style={styles.itemDebt}>
                <Text style={styles.title}>{debtGroup.name}</Text>
                <Text style={styles.subtitle} >Кол-во участников: {debtGroup.people}</Text>
                <DelBtn idDebtGroup={debtGroup.id} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemDebt: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginBottom: 1,
        position: 'relative',
    },
    title: {
        fontSize: 20,
        marginBottom: 3
    },
    subtitle: {
        fontSize: 12,
        opacity: 0.3
    }
})

const mapDispatchToProps = {
    showBtnDelete,
}

const mapStateToProps = (state: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DebtItem);