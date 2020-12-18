import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { formatShowingTime } from './showingTime'
import { useDispatch } from 'react-redux'

export const _ShowingTimes = ({ selectedFilm, showings, selectedDate, navigation }) => {
  const dispatch = useDispatch()
  const chooseTime = (showing) => {
    dispatch({ type: 'HIDE_FILM_DETAILS' })
    navigation.navigate('PickSeats', { selectedFilm, selectedDate, showing })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Showing times for {selectedDate.toDateString()}</Text>
      <View style={styles.showingList}>
        {showings.map(showing => (
          <Text key={showing.id} style={styles.showing} onPress={() => chooseTime(showing)}>
            {formatShowingTime(showing.showing_time)}
          </Text>
        ))}
      </View>
    </View>
  )
}

export const ShowingTimes = withNavigation(_ShowingTimes)

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  headline: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  showingList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  showing: {
    fontSize: 20,
  },
})
