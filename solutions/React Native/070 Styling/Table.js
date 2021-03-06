import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Table = ({ tableNumber, seats }) => (
  <View style={styles.container}>
    <Text style={styles.tableNumber}>Table {tableNumber}</Text>
    <View style={styles.seatsGroup}>
      {seats.map(seat => (
        <Text style={styles.seat} key={seat._id}>
          Seat {seat.seat_number}
        </Text>
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#140CE8',
    backgroundColor: '#11FF95',
  },
  tableNumber: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#140CE8',
  },
  seatsGroup: {
    flexDirection: 'row',
  },
  seat: {
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
  },
})
