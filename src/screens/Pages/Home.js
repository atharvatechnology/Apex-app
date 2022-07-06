import React from 'react';

import { View } from 'react-native';

import HomePage from '@apexapp/components/templates/Home';

const Home = props => {
  return (
    <View>
      <HomePage {...props} />
    </View>
  );
};

export default Home;
