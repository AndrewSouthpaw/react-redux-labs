import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Landing } from './Landing'

export const App = () => {
  const films = useSelector(state => state.films)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_FILMS' })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Landing films={films} />
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
