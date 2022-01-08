import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DebtNavigationStackRouterParamList } from '../navigations/types';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { connect } from 'react-redux';

import AddBtn from '../components/AddBtn';
import DebtItem from '../components/DebtItem';
import { TypeDebt } from '../types/types';
import CreateGroupModal from './modals/CreateGroupModal';
import { showDebtModal } from '../store/actions/visibleActions';

interface Props {
    debts: TypeDebt[],
    showDebtModal: () => void,
}

type NavigationProps = NativeStackNavigationProp<DebtNavigationStackRouterParamList, 'DebtList'>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, 'DebtList'>;

export const DebtList: React.FC<Props> = ({ debts, showDebtModal }) => {

    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    const goto = (debtGroup: TypeDebt): void => {
        navigation.navigate('DebtInfo', { debtGroup });
    }

    const addGroup = (): void => {

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {debts.length > 0 &&
                    debts.map(debtGroup =>
                        <DebtItem key={debtGroup.id} debtGroup={debtGroup} goto={goto} />
                    )
                }
            </ScrollView>
            <AddBtn showModal={showDebtModal} />
            <CreateGroupModal />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    }
})

const mapDispatchToProps = {
    showDebtModal,
}

const mapStateToProps = (state: any) => ({
    debts: state.debts,
})

export default connect(mapStateToProps, mapDispatchToProps)(DebtList);