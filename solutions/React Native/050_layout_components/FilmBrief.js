import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import { host } from './api'
import { useDispatch } from 'react-redux'

export const FilmBrief = ({ film }) => {
  const { id, title, tagline, poster_path } = film
  const dispatch = useDispatch()
  const selectFilm = () => {
    dispatch({ type: 'SET_SELECTED_FILM', film })
    dispatch({ type: 'SHOW_FILM_DETAILS' })
  }
  return (
    <TouchableHighlight onPress={selectFilm}>
      <View key={id}>
        <Image
          source={{ uri: `${host}${poster_path}` }}
          style={{ height: 100, width: 100, resizeMode: 'contain' }}
        />
        <Text>{title}</Text>
        <Text>{tagline}</Text>
      </View>
    </TouchableHighlight>
  )
}
