import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import seatImage from './assets/seat.png'

export const Seat = ({ seat, table, onSelect }) => {
  // console.log('seat', seat)
  return (
    <View>
      <TouchableHighlight
        onPress={seat.reserved ? () => {} : () => onSelect(table, seat)}
        disabled={seat.reserved}
      >
        <Image
          style={[styles.seat, seat.reserved && styles.seatTaken]}
          source={seatImage}
        />
      </TouchableHighlight>
      {/*<Text*/}
      {/*  style={[styles.seat, seat.reserved && styles.seatTaken]}*/}
      {/*  key={seat.id}*/}
      {/*  onPress={seat.reserved ? () => {} : () => onSelect(table, seat)}*/}
      {/*>*/}
      {/*  Seat {seat.seat_number}*/}
      {/*</Text>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  seat: {
    // fontWeight: 'bold',
    width: 40,
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  seatTaken: {
    backgroundColor: 'salmon',
  },
})

