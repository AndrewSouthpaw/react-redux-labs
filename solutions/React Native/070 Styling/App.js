import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Landing } from './Landing'
import axios from 'axios'
import { host } from './api'
import { Checkout } from './Checkout'
import { PickSeats } from './PickSeats'

// Colors
// Primary light: rgb(232, 229, 153) Pale yellow
// Secondary light: rgb(230, 255, 13) Bright yellow
// Primary dark: rgb(11, 134, 232)  Darker blue
// Secondary dark: rgb(17, 190, 255) Pale blue
// Highlight: rgb(255, 0, 0) Red

export const App = () => {
  const { films, selectedDate, selectedFilm, showFilmDetails } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_FILMS' })
  }, [])

  return (
    <View style={styles.container}>
      {/*<StatusBar style="auto" hidden />*/}
      <Landing
        films={films}
        selectedDate={selectedDate}
        selectedFilm={selectedFilm}
        showFilmDetails={showFilmDetails}
      />
      {/*<PickSeats selectedDate={selectedDate} selectedFilm={selectedFilm} />*/}
      {/*<Checkout />*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
