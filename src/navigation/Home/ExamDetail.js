import React, { Fragment } from 'react';

import { MyStack } from '../AppNavigation';

import ExamDetail from '@apexapp/screens/Pages/ExamDetail';

const ExamDetailRouter = () => {
    return (
        <Fragment>
            <MyStack.Screen name="ExamDetail" component={ExamDetail} />
        </Fragment>
    );
};

export default ExamDetailRouter;
