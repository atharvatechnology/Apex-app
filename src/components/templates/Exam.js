/**
 * This is a template for Exam screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the properties of react navigation received from screens.
 * @returns {Exam}- returns a template
 */


import React from 'react';

import Exam from '../modules/Pages/Exam';


const ExamPage = props => {
    return <Exam {...props} />;
};

export default ExamPage;
