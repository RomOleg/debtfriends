import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DebtNavigationStackRouterParamList } from '../navigations/types';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AddBtn from '../components/AddBtn';
import DebtItem from '../components/DebtItem';
import { TypeDebt } from '../types/types';
import CreateGroupModal from './modals/CreateGroupModal';


type Props = NativeStackNavigationProp<DebtNavigationStackRouterParamList, 'DebtList'>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, 'DebtList'>;

export const DebtList: React.FC<Props> = ({  }) => {

    const navigation = useNavigation<Props>();
    const route = useRoute<RouteProps>();

    const [modalVisible, setModalVisible] = useState(false);

    const [debts, setDebts] = useState<TypeDebt[]>([
        { id: '1', name: 'group1', sum: 1000, people: 3 },
        { id: '2', name: 'group2', sum: 1000, people: 3 },
        { id: '3', name: 'group3', sum: 1000, people: 3 },
        { id: '4', name: 'group4', sum: 1000, people: 3 },
        { id: '5', name: 'group5', sum: 1000, people: 3 },
        { id: '6', name: 'group6', sum: 1000, people: 3 },
        { id: '7', name: 'group7', sum: 1000, people: 3 },
        { id: '8', name: 'group8', sum: 1000, people: 3 },
    ])

    const goto = (debt: TypeDebt): void => {
        navigation.navigate('DebtInfo', { debt });
    }

    const addGroup = (): void => {

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {debts.length > 0 &&
                    debts.map(debt =>
                        <DebtItem key={debt.id} debt={debt} goto={goto}/>
                    )
                }
            </ScrollView>
            <AddBtn showModal={() => setModalVisible(true)} />
            <CreateGroupModal visible={modalVisible} closeModal={() => setModalVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    }
})

export default DebtList;