import React, { Fragment } from 'react';

import { MyStack } from '../AppNavigation';


import Exam from '@apexapp/screens/Pages/Exam';

const ExamRouter = () => {
    return (
        <Fragment>
            <MyStack.Screen name="Exam" component={Exam} />
        </Fragment>
    );
};

export default ExamRouter;
