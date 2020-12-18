import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Seat } from './Seat'

export const Table = ({ table, onSelect }) => (
  <View style={[styles.container, { top: table.x * 100, left: table.y * 200 }]}>
    <Text style={styles.tableNumber}>Table {table.table_number}</Text>
    <View style={styles.seatsGroup}>
      {table.seats.map(seat => (
        <Seat seat={seat} table={table} onSelect={seat.reserved ? () => {} : () => onSelect(table, seat)} />
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
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
})
