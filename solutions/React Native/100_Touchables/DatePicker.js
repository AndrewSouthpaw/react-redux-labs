import React, { useState } from 'react'
import { Button, DatePickerAndroid, DatePickerIOS, Platform, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

export const DatePicker = ({ selectedDate }) => {
  const [showIOSPicker, setShowIOSPicker] = useState(false)
  const dispatch = useDispatch()
  const handleIOSDateChange = (date) => {
    dispatch({ type: 'SET_SELECTED_DATE', date })
    setShowIOSPicker(false)
  }
  const pickDate = async () => {
    if (Platform.OS === 'android') {
      const { year, month, day } = await DatePickerAndroid.open()
      dispatch({ type: 'SET_SELECTED_DATE', date: new Date(year, month, day) })
    } else if (Platform.OS === 'ios') {
      setShowIOSPicker(true)
    }
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>Showings for {selectedDate.toDateString()}</Text>
        <Button title="(Change)" onPress={pickDate} />
      </View>
      {showIOSPicker && (<DatePickerIOS date={selectedDate} onDateChange={handleIOSDateChange} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 18 },
})
