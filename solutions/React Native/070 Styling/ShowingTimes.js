import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ShowingTimes = ({ showings, selectedDate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Showing times for {selectedDate.toDateString()}</Text>
      <View style={styles.showingList}>
        {showings.map(({ id, showing_time }) => (
          <Text key={id} style={styles.showing}>{formatShowingTime(showing_time)}</Text>
        ))}
      </View>
    </View>
  )
}

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
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  showing: {
    fontSize: 20,
  },
})

function formatShowingTime(showingTime) {
  const t = new Date(showingTime)
  const h = t.getHours()
  const m = t.getMinutes()
  return `${h > 12 ? h - 12 : h}:${m < 10 ? 0 + m : m} ${h < 12 ? 'am' : 'pm'}`
}
