import React from 'react'
import { View, Button, DatePickerIOS, DatePickerAndroid, Platform } from 'react-native'
import { FilmBrief } from './FilmBrief'
import { DatePicker } from './DatePicker'

export const Landing = ({ films, selectedDate }) => {
  return (
    <View>
      <DatePicker selectedDate={selectedDate} />
      {films.map((film) => (
        <FilmBrief key={film.id} film={film} />
      ))}
    </View>
  )
}
