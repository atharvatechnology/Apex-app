import React, { Fragment } from 'react';

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