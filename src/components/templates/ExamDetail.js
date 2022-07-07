/**
 * This is a template for Exam Detailpage. It contains all the modules used in this template.
 * @param {Object} props - contains all the properties of react navigation received from screens.
 * @returns {ExamDetail}- returns a template
 */


import React from 'react';

import ExamDetail from '../modules/Pages/ExamDetail';



const ExamDetailPage = props => {
    return <ExamDetail {...props} />;
};

export default ExamDetailPage;
