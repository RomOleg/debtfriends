import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RouterParamList } from '../navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TypeDebtInfo } from '../types/types';

interface Props {

}

type DebtInfoScreenProp = NativeStackNavigationProp<RouterParamList, 'DebtInfo'>;
type RouteProps = RouteProp<RouterParamList, 'DebtInfo'>;

export const DebtInfo: React.FC<Props> = ({ }) => {

    const navigation = useNavigation<DebtInfoScreenProp>()
    const route = useRoute<RouteProps>();

    const debtors: TypeDebtInfo[] = [
        { id: '1', debtorName: 'Anna', debtMy: '12', debtMe: '666' },
        { id: '2', debtorName: 'Vasia', debtMy: '3434', debtMe: '643' },
        { id: '3', debtorName: 'Ivan', debtMy: '0', debtMe: '212' },
        { id: '4', debtorName: 'Dima', debtMy: '232', debtMe: '0' },
    ]

    return (
        <View style={styles.container}>
            {debtors.length > 0 ?
                debtors.map(debtor =>
                    <TouchableOpacity style={styles.blockDebtor} key={debtor.id} onPress={() => console.log(debtor)}>
                        <Text style={styles.textDebtor}>{debtor.debtorName}</Text>
                        <Text style={[styles.textDebtorMy, styles.textDebtor]}>{debtor.debtMy}</Text>
                        <Text style={[styles.textDebtorMe, styles.textDebtor]}>{debtor.debtMe}</Text>
                    </TouchableOpacity>
                )
                : <Text>Нет долгов</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        position: 'relative',
    },
    blockDebtor: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginBottom: 1
    },
    textDebtor: {
        fontSize: 18,
        maxWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDebtorMy: {
        color: 'red',
    },
    textDebtorMe: {
        color: 'green',
    },
})

export default DebtInfo;