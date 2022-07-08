/**
 * This is a template for CourseOverview screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {CourseOverview}- returns a template
 */

import React from 'react';

import CourseOverview from '../modules/Pages/CourseOverview';

const CourseOverviewPage = props => {
  return <CourseOverview {...props} />;
};

export default CourseOverviewPage;
