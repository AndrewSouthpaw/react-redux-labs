import React from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Table } from './Table'
import { Title } from './Title'
import tables from './assets/tables.json'
import { formatSelectedDate, formatShowingTime } from './showingTime'

export const PickSeats = ({ navigation }) => {
  const selectedFilm = navigation.getParam('selectedFilm')
  const selectedDate = navigation.getParam('selectedDate')
  const showing = navigation.getParam('showing')

  const checkout = (table, seat) => {
    navigation.navigate('Checkout', { selectedDate, selectedFilm, showing, table, seat })
  }

  return (
    <SafeAreaView>
      <Text style={styles.headline}>Choose your seats for</Text>
      <View style={styles.movieTitle}>
        <Title>{selectedFilm.title}</Title>
      </View>
      <Text style={styles.on}>on</Text>
      <Text style={styles.selectedDate}>{formatSelectedDate(selectedDate)}</Text>
      <Text style={styles.on}>at</Text>
      <Text style={styles.selectedDate}>{formatShowingTime(showing.showing_time)}</Text>
      <ScrollView style={styles.tablesContainer}>
        {tables.map(table => (
          <Table table={table} key={table._id} onSelect={() => checkout(table)} />
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
