import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data/Index';
import {RedSanCarousalData} from '../data/Index';
import SectionHeader from '../components/SectionHeader';
import {colors} from '../constants/theme';
import TripList from '../components/TripList';
import RedSanHeader from '../components/RedSanHeader';
import RedSanCarousal from '../components/RedSanCarousal';

const HomeScreen = () => {
  {
    console.log('Hello');
  }
  return (
    <View style={styles.container}>
      {/* <MainHeader title="Travel Buddy" /> */}
      {/* <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" /> */}
      <RedSanHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={RedSanCarousalData} />
        {/* <RedSanCarousal list={RedSanCarousalData} /> */}
        <SectionHeader title="You Pinned📌" />
        <TripList list={PLACES} />
        <SectionHeader title="Your Streaks✨" />
        <TripList list={PLACES} />
        <TopPlacesCarousel list={TOP_PLACES} />
        <TopPlacesCarousel list={TOP_PLACES} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});
