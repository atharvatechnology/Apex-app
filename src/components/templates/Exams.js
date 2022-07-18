/**
 * This is a template for Exams page. It contains all the modules used in this template.
 * @param {Object} props - contains all the properties of react navigation received from screens.
 * @returns {Exams }- returns a template for Exams
 */

import React from 'react';

import Exams from '../modules/Exams/Exams';

const ExamsPage = props => {
  return <Exams {...props} />;
};

export default ExamsPage;
