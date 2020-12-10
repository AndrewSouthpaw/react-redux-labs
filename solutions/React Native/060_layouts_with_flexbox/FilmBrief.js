import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import { host } from './api'
import { useDispatch } from 'react-redux'
import { FilmImage } from './FilmImage'

export const FilmBrief = ({ film }) => {
  const { id, title, tagline, poster_path } = film
  const dispatch = useDispatch()
  const selectFilm = () => {
    dispatch({ type: 'SET_SELECTED_FILM', film })
    dispatch({ type: 'SHOW_FILM_DETAILS' })
  }
  return (
    <TouchableHighlight onPress={selectFilm}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FilmImage film={film} style={{ height: 100, width: 100, resizeMode: 'contain' }} />
        <View>
          <Text>{title}</Text>
          <Text>{tagline}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}
