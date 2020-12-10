import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import cart from './assets/cart.json'
import { map, prop, sum } from 'ramda'

const TAX = 0.10

export const Checkout = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const purchase = () => { console.log('purchasing') }

  const subtotal = sum(map(prop('price'), cart.seats))
  const tax = subtotal * TAX

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Checkout</Text>
      </View>
      <Text>You cart</Text>
      <View>
        {cart.seats.map(seat => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} key={seat.id}>
            <Text>Table {seat.table_number}, Seat {seat.seat_number}</Text>
          </View>
        ))}
        <View style={{ flexDirection: 'row' }}>
          <Text>Subtotal</Text>
          <Text>{subtotal}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Tax</Text>
          <Text>{tax}</Text>
        </View>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Text>We're checking out</Text>
          <Text>First name</Text>
          <TextInput value={firstName} onChangeText={setFirstName} />
          <Text>Last name</Text>
          <TextInput value={lastName} onChangeText={setLastName} />
          <Text>Credit card</Text>
          <TextInput value={creditCard} onChangeText={setCreditCard} keyboardType="number-pad" />
          <Text>Email</Text>
          <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" />
          <Text>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <View style={{ flexDirection: 'row-reverse' }}>
            <Button title="Purchase" onPress={purchase} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
