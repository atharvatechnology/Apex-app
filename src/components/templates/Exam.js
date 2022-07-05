/**
 * This is a template for Home screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {Home}- returns a template
 */


import React from 'react';
import Exam from '../modules/Pages/Exam';


const ExamPage = props => {
    return <Exam {...props} />;
};

export default ExamPage;
