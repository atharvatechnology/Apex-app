/**
 * This is a template for ExamPayment screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {ExamResultspage}- returns a template
 */

import React from 'react';
import ExamResults from '@components/modules/Exams/ExamResults';



const ExamResultsPage = props => {
  return <ExamResults {...props} />
};

export default ExamResultsPage;
