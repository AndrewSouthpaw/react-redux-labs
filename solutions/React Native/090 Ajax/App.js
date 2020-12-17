import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Landing } from './Landing'
import axios from 'axios'
import { host } from './api'
import { Checkout } from './Checkout'
import { PickSeats } from './PickSeats'
import { Ticket } from './Ticket'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

// Colors
// Primary light: rgb(232, 229, 153) Pale yellow
// Secondary light: rgb(230, 255, 13) Bright yellow
// Primary dark: rgb(11, 134, 232)  Darker blue
// Secondary dark: rgb(17, 190, 255) Pale blue
// Highlight: rgb(255, 0, 0) Red

const AppNavigator = createStackNavigator({
  Landing: { screen: Landing },
  PickSeats, // shorthand version
  Checkout,
  Ticket,
}, {
  initialRouteName: 'Landing', // specifies which route to start on
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(11, 134, 232)',  // Or whatever color you like
    },
    headerTintColor: 'rgb(17, 190, 255)',  // For the back/forward buttons
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const AppContainer = createAppContainer(AppNavigator)

export const App = () => {
  const { films, selectedDate, selectedFilm, showFilmDetails } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_FILMS' })
  }, [])

  return (
    <AppContainer />
  )
  // return (
  //   <View style={styles.container}>
  //     <AppContainer />
  //     {/*<StatusBar style="auto" hidden />*/}
  //     {/*<Landing*/}
  //     {/*  films={films}*/}
  //     {/*  selectedDate={selectedDate}*/}
  //     {/*  selectedFilm={selectedFilm}*/}
  //     {/*  showFilmDetails={showFilmDetails}*/}
  //     {/*/>*/}
  //     {/*<PickSeats selectedDate={selectedDate} selectedFilm={selectedFilm} />*/}
  //     {/*<Checkout />*/}
  //   </View>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
