/**
* This is an onboarding page with 3 slides. This page is shown only when user opens the app for the first time.
* @param {Object} props.navigation - contains all the propeties of react navigation.
* @returns {OnBoarding}- returns a module for on boarding.
*/

import React, { useRef, useState } from "react";
import { Text, View } from "react-native";

import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from '@styles/modules/onBoarding.scss';
import CustomButton from "@elements/CustomButton";
import { WIDTH } from "@utils/constants";


const data = [
  {
    title: 'Apex Educational Academy'
  },
  {
    title: 'One Platform For Everything'
  },
  {
    title: 'Where student meets excellence'
  },
]

const OnBoarding = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const CarouselRef = useRef(null);

  const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <Text style={styles.heading}>{item.title}</Text>
    );
  }

  const handleSigninPress = () => {
    console.log("cadcac")
    props.navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Carousel
          ref={CarouselRef}
          data={data}
          renderItem={_renderItemWithParallax}
          sliderWidth={WIDTH}
          itemWidth={WIDTH}
          onSnapToItem={(index) => setActiveSlide(index)}
        />

        <View style={styles.paginationContainer}>

          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.pagination}
            dotColor={'rgba(255, 255, 255, 0.92)'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={'white'}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
            inactiveDotStyle={styles.inactiveDotStyle}
            carouselRef={CarouselRef}
            tappableDots={!!CarouselRef}
          />

          <CustomButton
            type='white'
            title={activeSlide === 2 ? "Signup" : "Skip to Signup"}
            onPress={handleSigninPress}
          />
        </View>
      </View>


    </View>
  );
}

export default OnBoarding;