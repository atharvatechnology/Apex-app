/**
 * This is one of three screens for signup. It contains dropdowns for selecting user's interests.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Interest}- returns a module for Interest.
 */

import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

import styles from '@styles/modules/signup/Interests.scss';
import CustomButton from "@elements/CustomButton";
import CustomDropdown from "@apexapp/components/elements/CustomDropdown";




let preparation = [{
  id: 1,
  name: "Loksewa Preparation"
}, {
  id: 2,
  name: "Entrance Preparation",
},]


let category = [{
  id: 1,
  text: "Loksewa"
}, {
  id: 2,
  text: "Banking"
}, {
  id: 3,
  text: "Engineering"
},]


const Interest = (props) => {

  const [show, setShow] = useState(false)

  const [selectedButton, setSelectedButton] = useState(0);

  const [selectedItem, setSelectedItem] = useState(0)
  const onSelect = (item) => {
    setSelectedItem(item.id)
    setShow(true)

  }
  const handleContinue = () => {
  }

  const handleButton = (item) => {
    setSelectedButton(item.id)
    // selectedButton ? setSelectedButton(0) : setSelectedButton(1)
    // console.log(selectedButton);
  }



  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi Kishor Ghising</Text>
        <Text style={styles.p}>Setup your profile. Just a few steps.</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.h3}>What's your interest?</Text>
      </View>

      <CustomDropdown
        value={selectedItem}
        data={preparation}
        onSelect={onSelect}
        label="Interest"
      />



      {show ? <View>
        <Text style={styles.categorytext}>Choose sub-category</Text>

        <View style={styles.allcategorybutton}>

          {category.map((item, index) => {
            return (

              <CustomButton style={selectedButton === item.id ? styles.categorybuttonchange : styles.categorybutton}
                key={index}
                onPress={() => handleButton(item)}
                // style={styles.categorybutton}
                type={selectedButton === item.id ? "theme" : "white"}
                title={item.text}

              />

            )
          })}
        </View>


      </View> : null}



      <CustomButton

        type="theme"
        title={'Continue'}
        style={styles.continue}
        onPress={handleContinue}
      />
    </View>
  );
};

export default Interest;
