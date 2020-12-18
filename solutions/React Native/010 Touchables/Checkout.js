import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import cart from './assets/cart.json'
import { map, prop, sum } from 'ramda'
import { useDispatch } from 'react-redux'
import { host } from './api'
import axios from 'axios'

const TAX = 0.0825

const reserveSeats = async (seats, showing, dispatch) => {
  await Promise.all(
    seats.map(async (seat) => {
      try {
        await axios.post(`${host}/api/reservations`,
          { showing_id: showing.id, seat_id: seat.id, user_id: 42, payment_key: 'pk_foobar' },
        )
      } catch (err) {
        console.error('Could not create reservation', err)
      }
    }),
  )
}

export const Checkout = ({ navigation }) => {
  const dispatch = useDispatch()
  const seats = navigation.getParam('seats')
  const showing = navigation.getParam('showing')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const purchase = async () => {
    await reserveSeats(seats, showing, dispatch)
    navigation.navigate('Ticket', navigation.state.params)
  }

  const subtotal = sum(map(prop('price'), seats))
  const tax = subtotal * TAX
  const total = subtotal + tax

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.headline}>Checkout</Text>
          <Text style={styles.yourCart}>Your cart</Text>
          <View style={styles.cart}>
            {seats.map(({ id, table_number, seat_number, price }) => (
              <View style={styles.cartLine} key={id}>
                <Text style={styles.cartText}>
                  Table {table_number} Seat {seat_number}
                </Text>
                <Text style={styles.cartText}>{price}</Text>
              </View>
            ))}
            <Text style={[styles.cartText, styles.tax]}>_________________</Text>
            <Text style={[styles.cartText, styles.subtotal]}>
              Subtotal: {displayMoney(subtotal)}
            </Text>
            <Text style={[styles.cartText, styles.tax]}>
              Tax: {displayMoney(tax)}
            </Text>
            <Text style={[styles.cartText, styles.tax]}>_________________</Text>
            <Text style={[styles.cartText, styles.total]}>
              Total: {displayMoney(total)}
            </Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>First name</Text>
            <TextInput value={firstName} onChangeText={setFirstName} style={styles.formField} />

            <Text style={styles.label}>Last name</Text>
            <TextInput value={lastName} onChangeText={setLastName} style={styles.formField} />

            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              style={styles.formField}
            />

            <Text style={styles.label}>Cell</Text>
            <TextInput
              value={phone}
              keyboardType="phone-pad"
              onChangeText={setPhone}
              style={styles.formField}
            />

            <Text style={styles.label}>Credit Card Number</Text>
            <TextInput
              value={creditCard}
              keyboardType="number-pad"
              onChangeText={setCreditCard}
              style={styles.formField}
            />

            <Button title="Purchase" onPress={purchase} style={styles.purchaseButton} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // otherwise it won't take up full width, because its container is centering
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 30,
  },
  yourCart: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cart: {
    // width: 400,
    backgroundColor: 'rgb(232, 229, 153)',
    borderColor: 'rgb(11, 134, 232)',
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  cartText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cartLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtotal: {
    alignSelf: 'flex-end',
  },
  tax: {
    alignSelf: 'flex-end',
  },
  total: {
    alignSelf: 'flex-end',
  },
  form: {
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  formField: {
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
  },
  purchaseButton: {
    backgroundColor: 'rgb(232, 229, 153)',
    borderColor: 'rgb(230, 255, 13)',
  },
})

const displayMoney = amount => `$${amount.toFixed(2)}`
