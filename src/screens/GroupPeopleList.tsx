import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DebtNavigationStackRouterParamList } from '../navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    
}

type DebtInfoScreenProp = NativeStackNavigationProp<DebtNavigationStackRouterParamList, 'GroupPeopleList'>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, 'GroupPeopleList'>;

export const GroupPeopleList: React.FC<Props> = ({  }) => {

    const navigation = useNavigation<DebtInfoScreenProp>()
    const route = useRoute<RouteProps>();

    return (
        <View style={styles.container}>
          <Text>GroupPeopleList</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    }
})

export default GroupPeopleList;