import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Landing } from './Landing'
import axios from 'axios'
import { host } from './api'
import { Checkout } from './Checkout'
import { PickSeats } from './PickSeats'

export const App = () => {
  const { films, selectedDate, selectedFilm, showFilmDetails } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${host}/api/films`)
      .then(({ data }) => { console.log('data', data) })
    dispatch({ type: 'FETCH_FILMS' })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" hidden />
      <Landing
        films={films}
        selectedDate={selectedDate}
        selectedFilm={selectedFilm}
        showFilmDetails={showFilmDetails}
      />
      {/*<PickSeats />*/}
      {/*<Checkout />*/}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
  },
})
