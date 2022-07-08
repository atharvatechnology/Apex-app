import React from 'react';

import {View} from 'react-native';

import CoursesPage from '@apexapp/components/templates/Courses';

const Courses = props => {
  return (
    <View>
      <CoursesPage {...props} />
    </View>
  );
};

export default Courses;
