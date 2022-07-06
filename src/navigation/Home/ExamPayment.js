import React, {Fragment} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from '../AppNavigation';

// import Home from '@apexapp/screens/Pages/Home';
import ExamPayment from '@apexapp/screens/Pages/ExamPayment';

const ExamPaymentRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="ExamPayment" component={ExamPayment} />
    </Fragment>
  );
};

export default ExamPaymentRouter;
