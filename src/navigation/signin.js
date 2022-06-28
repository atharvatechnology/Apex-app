import React, { Fragment } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '@screens/Signin/Login';



import { MyStack } from './AppNavigation';

const SignInRouter = () => {
    return (
        <Fragment>
            <MyStack.Screen name="Login" component={Login} />

        </Fragment>

    );
}

export default SignInRouter;