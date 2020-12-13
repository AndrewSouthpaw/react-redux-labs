import React from 'react'
import { Button, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Table } from './Table'
import { Title } from './Title'

import tables from './assets/tables.json'

export const PickSeats = ({ selectedFilm, selectedDate }) => {
  const checkout = () => {
    throw new Error('Not implemented yet')
  }

  return (
    <SafeAreaView>
      <Text style={styles.headline}>Choose your seats for</Text>
      <View style={styles.movieTitle}>
        <Title>{selectedFilm.title}</Title>
      </View>
      <Text style={styles.on}>on</Text>
      <Text style={styles.selectedDate}>{formatSelectedDate(selectedDate)}</Text>
      <ScrollView style={styles.tablesContainer}>
        {tables.map(table => (
          <Table {...table} key={table._id} />
        ))}
      </ScrollView>
      <Button title="Check out" onPress={checkout} style={styles.checkoutButton} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headline: {
    alignSelf: 'center',
    fontSize: 20,
  },
  movieTitle: {
    alignSelf: 'center',
  },
  on: {
    alignSelf: 'center',
  },
  selectedDate: {
    alignSelf: 'center',
    fontSize: 20,
  },
  tablesContainer: {
    padding: 5,
  },
  checkoutButton: {
    backgroundColor: 'green',
    color: 'white',
    borderColor: 'darkgreen',
  },
})

const formatSelectedDate = (selectedDate) => (
  selectedDate.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
)
