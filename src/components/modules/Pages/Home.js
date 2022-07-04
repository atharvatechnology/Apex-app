/**
 * This is  page containing the Home and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Home}- returns a module for Home
 */

import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import NavBar from '@apexapp/components/elements/Navbar/Navbar';

const Home = props => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
