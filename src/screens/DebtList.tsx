import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouterParamList } from '../navigations/types';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AddBtn from '../components/AddBtn';
import DebtItem from '../components/DebtItem';
import { TypeDebt } from '../types/types';


type Props = NativeStackNavigationProp<RouterParamList, 'DebtList'>;
type RouteProps = RouteProp<RouterParamList, 'DebtList'>;

export const DebtList: React.FC<Props> = ({  }) => {

    const navigation = useNavigation<Props>();
    const route = useRoute<RouteProps>();

    const debts: TypeDebt[] = [
        { id: '1', name: 'group1', sum: 1000, people: 3 },
        { id: '2', name: 'group2', sum: 1000, people: 3 },
        { id: '3', name: 'group3', sum: 1000, people: 3 },
        { id: '4', name: 'group4', sum: 1000, people: 3 },
        { id: '5', name: 'group5', sum: 1000, people: 3 },
        { id: '6', name: 'group6', sum: 1000, people: 3 },
        { id: '7', name: 'group7', sum: 1000, people: 3 },
        { id: '8', name: 'group8', sum: 1000, people: 3 },
        { id: '11', name: 'group1', sum: 1000, people: 3 },
        { id: '22', name: 'group2', sum: 1000, people: 3 },
        { id: '33', name: 'group3', sum: 1000, people: 3 },
        { id: '44', name: 'group4', sum: 1000, people: 3 },
        { id: '55', name: 'group5', sum: 1000, people: 3 },
        { id: '66', name: 'group6', sum: 1000, people: 3 },
        { id: '77', name: 'group7', sum: 1000, people: 3 },
        { id: '88', name: 'group8', sum: 1000, people: 3 },
        { id: '111', name: 'group1', sum: 1000, people: 3 },
        { id: '222', name: 'group2', sum: 1000, people: 3 },
        { id: '333', name: 'group3', sum: 1000, people: 3 },
        { id: '444', name: 'group4', sum: 1000, people: 3 },
        { id: '555', name: 'group5', sum: 1000, people: 3 },
        { id: '666', name: 'group6', sum: 1000, people: 3 },
        { id: '777', name: 'group7', sum: 1000, people: 3 },
        { id: '888', name: 'group8', sum: 1000, people: 3 },
    ]

    const goto: any = (debt: TypeDebt): void => {
        navigation.navigate('DebtInfo', { debt });
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
            <AddBtn />
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