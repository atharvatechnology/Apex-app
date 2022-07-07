/**
 * This is a template for Course screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {Course}- returns a template
 */

import React from 'react';

import Courses from '../modules/Pages/Courses';

const CoursesPage = props => {
  return <Courses {...props} />;
};

export default CoursesPage;
