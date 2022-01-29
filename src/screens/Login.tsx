import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DebtNavigationStackRouterParamList } from '../navigations/types';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { connect } from 'react-redux';

import BaseButton from '../components/BaseButton';
import BaseTextInput from '../components/BaseTextInput';

import { signIn } from '../store/actions/authorizationActions';

interface Props {
    signIn: () => void,
}

type NavigationProps = NativeStackNavigationProp<DebtNavigationStackRouterParamList, 'Login'>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, 'Login'>;

export const Login: React.FC<Props> = ({ signIn }) => {
    
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<RouteProps>();

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');       

    const gotoRegistration = (): void => {
        navigation.navigate('Registration');
    }
    const gotoResetPassword = (): void => {
        navigation.navigate('ResetPassword');
    }

    const _signIn = () : void => {
        console.log('1212', signIn);
        signIn();
    }

    return (
        <View style={styles.container}>
            <BaseTextInput
                value={login}
                onChangeText={setLogin}
                placeholder={'ваш логин'}
            />
            <BaseTextInput
                value={password}
                onChangeText={setPassword}
                placeholder={'ваш пароль'}
                props={{
                    textContentType: 'password',
                }}
            />
            <BaseButton title={'Войти'} onPress={() => _signIn()} />
            <BaseButton title={'Зарегистрироваться'} onPress={gotoRegistration} />
            <BaseButton title={'Восстановать пароль'} onPress={gotoResetPassword} />
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
    signIn
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login);