import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Table = ({ table, onSelect }) => (
  <View style={styles.container}>
    <Text style={styles.tableNumber}>Table {table.table_number}</Text>
    <View style={styles.seatsGroup}>
      {table.seats.map(seat => (
        <Text
          style={[styles.seat, seat.reserved && styles.seatTaken]}
          key={seat.id}
          onPress={seat.reserved ? () => {} : () => onSelect(table, seat)}
        >
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
  seatTaken: {
    backgroundColor: 'salmon',
  },
})
