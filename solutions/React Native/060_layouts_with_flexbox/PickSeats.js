import React from 'react'
import tables from './assets/tables.json'
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'

export const PickSeats = () => (
  <SafeAreaView>
    <Text>Choose your seats for</Text>
    <Text>Movie</Text>
    <Text>on</Text>
    <Text>Some date...</Text>
    <Text>Some time...</Text>
    <ScrollView>
      {tables.map(table => (
        <View>
          <Text>Table {table.table_number}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {table.seats.map(seat => (
              <Text>Seat {seat.seat_number}</Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
    <View style={{ flexDirection: 'row-reverse' }}>
      <Button title="Checkout" />
    </View>
  </SafeAreaView>
)
