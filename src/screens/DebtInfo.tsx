import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DebtRouterStackParamList } from '../navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    
}

type debtInfoScreenProp = NativeStackNavigationProp<DebtRouterStackParamList, 'DebtInfo'>;
type RouteProps = RouteProp<DebtRouterStackParamList, 'DebtInfo'>;

export const DebtInfo: React.FC<Props> = ({  }) => {

    const navigation = useNavigation<debtInfoScreenProp>()
    const route = useRoute<RouteProps>();

    return (
        <View style={styles.container}>
          <Text>{route.params.debt.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    }
})

export default DebtInfo;