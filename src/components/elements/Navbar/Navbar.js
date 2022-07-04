/**
 * This is  page containing the Home and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Home}- returns a module for Home
 */
import CustomDropdown from '@apexapp/components/elements/CustomDropdown';

import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import styles from '@styles/elements/NavBar/Navbar.scss';

let preparation = [
  {
    id: 1,
    name: '',
  },
];

const NavBar = props => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const onSelect = item => {
    setSelectedItem(item.id);
    setShow(true);
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('@assets/images/apexLogo.png')}
        />

        <CustomDropdown
          style={styles.CustomDropDown}
          value={selectedItem}
          data={preparation}
          onSelect={onSelect}
          label="Search here"
        />
      </View>
    </>
  );
};

export default NavBar;
