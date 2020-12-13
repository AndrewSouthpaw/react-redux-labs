import React from 'react'
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { Title } from './Title'
import { FilmImage } from './FilmImage'
import { formatSelectedDate, formatShowingTime } from './showingTime'
import { StackActions } from 'react-navigation'
import { HeaderBackButton } from 'react-navigation-stack'

export const Ticket = ({ navigation }) => {
  const selectedFilm = navigation.getParam('selectedFilm')
  const selectedDate = navigation.getParam('selectedDate')
  const showing = navigation.getParam('showing')
  const seats = navigation.getParam('seats')

  const ticketNumber = getTicketNumber()

  const handleDone = () => {
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.greeting}>
            We're looking forward to seeing you! Show this to your host when you arrive.
            This is your ticket.
          </Text>
          <View style={styles.titleContainer}>
            <FilmImage film={selectedFilm} style={styles.poster} />
            <Title style={{ flex: 1 }}>{selectedFilm.title}</Title>
          </View>
          <Text style={styles.showingTime}>{formatSelectedDate(selectedDate)}</Text>
          <Text style={styles.showingTime}>{formatShowingTime(showing.showing_time)}
          </Text>
          <View style={styles.ticketContainer}>
            <QRCode value={ticketNumber.toString()} size={300} />
            <Text>Ticket number: {ticketNumber}</Text>
          </View>
          <View style={styles.seatContainer}>
            {seats.map(seat => (
              <Text style={styles.seat} key={seat._id}>
                Table {seat.table_number} Seat {seat.seat_number}
              </Text>
            ))}
          </View>
          <Button title="Done" onPress={handleDone} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Ticket.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <HeaderBackButton label="Home" onPress={() => navigation.dispatch(StackActions.popToTop())} />,
  headerTitle: 'Dinner and a Movie',
})

const getTicketNumber = () => Math.floor((Math.random() * 1000000) - 50000)

const styles = StyleSheet.create({
  header: { flex: 1, flexDirection: 'row' },
  logo: {
    height: 75, width: 75,
  },
  greeting: {
    fontSize: 20,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  poster: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200, width: 200,
  },
  ticketContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  showingTime: {
    textAlign: 'center',
    fontSize: 30,
  },
  seatContainer: {
    alignItems: 'center',
  },
  seat: {
    fontSize: 20,
    paddingLeft: 20,
  },
})
