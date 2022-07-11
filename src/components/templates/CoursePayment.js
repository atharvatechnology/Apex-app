/**
 * This is a template for CoursePayment screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {CoursePaymentpage}- returns a template
 */

import React from 'react';

import CoursePayment from '../modules/Pages/CoursePayment';

const CoursePaymentPage = props => {
  return <CoursePayment {...props} />;
};

export default CoursePaymentPage;
