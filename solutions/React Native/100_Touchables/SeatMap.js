import React, { useEffect } from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Table } from './Table'
import { Title } from './Title'
import { formatSelectedDate, formatShowingTime } from './showingTime'
import { useDispatch, useSelector } from 'react-redux'
import PinchZoomView from 'react-native-pinch-zoom-view'

const withSeatStatus = (reservations) => (table) => ({
  ...table,
  seats: table.seats.map(
    (seat) => ({ ...seat, reserved: reservations.some(reservation => reservation.seat_id === seat.id) }),
  ),
})

export const SeatMap = ({ navigation }) => {
  const selectedFilm = navigation.getParam('selectedFilm')
  const selectedDate = navigation.getParam('selectedDate')
  const showing = navigation.getParam('showing')
  const { tables, reservations } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      dispatch({ type: 'FETCH_TABLES_AND_SEATS', theaterId: showing.theater_id })
      dispatch({ type: 'FETCH_RESERVATIONS', showingId: showing.id })
    })()
  }, [])

  const checkout = (table, seat) => {
    navigation.navigate('Checkout', {
      selectedDate,
      selectedFilm,
      showing,
      table,
      seats: [{ ...seat, table_number: table.table_number }],
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headline}>Choose your seats for</Text>
        <View style={styles.movieTitle}>
          <Title>{selectedFilm.title}</Title>
        </View>
        <Text style={styles.on}>on</Text>
        <Text style={styles.selectedDate}>{formatSelectedDate(selectedDate)}</Text>
        <Text style={styles.on}>at</Text>
        <Text style={styles.selectedDate}>{formatShowingTime(showing.showing_time)}</Text>
      </View>
      <View style={styles.seatContainer}>
        <PinchZoomView>
          <View style={styles.pinchView}>
            {tables.map(withSeatStatus(reservations)).map(table => (
              <Table table={table} key={table.id} onSelect={checkout} />
            ))}
          </View>
        </PinchZoomView>
      </View>
      <Button title="Check out" onPress={checkout} style={styles.checkoutButton} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: { zIndex: 1, backgroundColor: 'white', paddingBottom: 20 },
  headline: {
    alignSelf: 'center',
    fontSize: 20,
  },
  pinchView: { position: 'absolute', width: 1300, height: 1000 },
  seatContainer: {
    flex: 1,
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
