/**
 * This is  page containing the Home and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Home}- returns a module for Home
 */

import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import CustomButton from '@apexapp/components/elements/CustomButton';
import NavBar from '@apexapp/components/elements/Navbar/Navbar';
import styles from '@styles/modules/Pages/Home.scss';
import { WIDTH } from '@apexapp/utils/constants';

const data = [
  {
    title: 'Live',
    title1: 'RBB',
    text: 'Loksewa Mock Test - 1',
    amount: `Rs.500 \u25CF 60 min`,
  },
  {
    title: 'One Platform For Everything',
  },
  {
    title: 'Where student meets excellence',
  },
  {
    title: 'One Platform For Everything',
  },
  {
    title: 'Where student meets excellence',
  },
];

const Home = props => {
  const [activeSlide, setActiveSlide] = useState(0);

  const CarouselRef = useRef(null);

  const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <>
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title1}>{item.title1}</Text>
        </View>

        <View>
          <Text style={styles.text}>{item.text}</Text>

          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </>
    );
  };

  return (
    <>
      <NavBar />

      <View style={styles.text}>
        <Text style={styles.p}>Live exams</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Carousel
            ref={CarouselRef}
            data={data}
            renderItem={_renderItemWithParallax}
            sliderWidth={WIDTH}
            itemWidth={WIDTH}
            onSnapToItem={index => setActiveSlide(index)}
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
          </View>
          <CustomButton type="theme" title={'Verify'} style={styles.signUp} />
        </View>
      </View>
    </>
  );
};

export default Home;
