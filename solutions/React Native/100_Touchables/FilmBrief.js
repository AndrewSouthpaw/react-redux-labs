import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { FilmImage } from './FilmImage'
import { Title } from './Title'

const selectFilm = (film, dispatch) => {
  dispatch({ type: 'SET_SELECTED_FILM', film })
  dispatch({ type: 'SHOW_FILM_DETAILS' })
}

export const FilmBrief = ({ film }) => {
  const { title, tagline } = film
  const dispatch = useDispatch()

  return (
    <TouchableHighlight
      onPress={() => selectFilm(film, dispatch)}
    >
      <View style={styles.mainLayout}>
        <FilmImage film={film} style={styles.image} />
        <View style={styles.textWrapper}>
          <Title>{title}</Title>
          <Text style={styles.taglineText}>{tagline}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  mainLayout: {
    marginTop: 20,
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    height: 100, width: 100,
  },
  taglineText: {},
  textWrapper: {
    flex: 1, // Added so the tagline wraps
  },
})
