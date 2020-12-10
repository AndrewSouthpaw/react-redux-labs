import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Landing } from './Landing'
import axios from 'axios'
import { host } from './api'

export const App = () => {
  const films = useSelector(state => state.films)
  const selectedDate = useSelector(state => state.selectedDate)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${host}/api/films`)
      .then(({ data }) => { console.log('data', data) })
    dispatch({ type: 'FETCH_FILMS' })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Landing films={films} selectedDate={selectedDate} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
