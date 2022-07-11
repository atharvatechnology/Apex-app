import React, {Fragment} from 'react';

import {MyStack} from '../AppNavigation';

import CoursePayment from '@apexapp/screens/Pages/CoursePayment';

const CoursePaymentRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="CoursePayment" component={CoursePayment} />
    </Fragment>
  );
};

export default CoursePaymentRouter;
