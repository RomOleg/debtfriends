import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DebtNavigationStackRouterParamList } from '../navigations/types';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { connect } from 'react-redux';

import BaseButton from '../components/BaseButton';
import BaseTextInput from '../components/BaseTextInput';

interface Props {
    
}

type NavigationProps = NativeStackNavigationProp<DebtNavigationStackRouterParamList, 'ResetPassword'>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, 'ResetPassword'>;

export const ResetPassword: React.FC<Props> = ({  }) => {

    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    const [login, setLogin] = useState<string>('');    

    return (
        <View style={styles.container}>
            <BaseTextInput
                value={login}
                onChangeText={setLogin}
                placeholder={'Введите ваш логин'}
            />
            <BaseButton title={'Сбросить пароль'} onPress={() => {}} />
            <BaseButton title={'Назад'} onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const mapDispatchToProps = {
    
}

const mapStateToProps = (state: any) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);