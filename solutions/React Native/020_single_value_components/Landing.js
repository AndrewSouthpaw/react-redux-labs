import React from 'react'
import { View } from 'react-native'
import { FilmBrief } from './FilmBrief'

export const Landing = ({ films }) => (
  <View>
    {films.map((film) => (
      <FilmBrief key={film.id} film={film} />
    ))}
  </View>
)
