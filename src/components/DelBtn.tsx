import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TypeDebt } from '../types/types';
import { delDebt } from '../store/actions/debtActions'
import { connect } from 'react-redux';

interface Props {
    delDebt?: (debt: TypeDebt[]) => void,
    idDebtGroup: number,
    debts?: TypeDebt[],
    visible?: boolean,
}

export const DelBtn: React.FC<Props> = ({ delDebt, idDebtGroup, debts, visible }) => {

    const deleteGroup = (): void => {
        console.log(1121);
        
        // const newDebts = debts.filter(debt => debt.id !== idDebtGroup);
        // delDebt(newDebts)
    }
    console.log("visible", visible);
    

    return visible ?
        <View>
            <TouchableOpacity style={styles.container} onPress={deleteGroup}>
                <Icon name="trash"
                    size={28}
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
        zIndex: 9999,
        width: 65,
        height: 65,
    },
})

const mapDispatchToProps = {
    delDebt,
}

const mapStateToProps = (state: any) => ({
    debts: state.debts,
    visible: state.visible.visibleModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(DelBtn);