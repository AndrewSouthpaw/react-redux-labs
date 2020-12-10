import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput } from 'react-native'

export const Checkout = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const purchase = () => { console.log('purchasing') }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView style={{flex: 1}}>
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
          <Button title="Purchase" onPress={purchase} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
