import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import { LinearGradient } from 'expo-linear-gradient';
import CategoriesScreen from '../CategoriesScreen/CategoriesScreen';
import { ImageBackground } from 'react-native';
import Call from '../../components/Call/Call'

function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/Background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <Call />
        <Banner />
        <CategoriesScreen  />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
