import React, { useState } from 'react'
import { Modal, RefreshControl, ScrollView, Button, Text, View, Image } from 'react-native'
import { FilmBrief } from './FilmBrief'
import { DatePicker } from './DatePicker'
import { useDispatch } from 'react-redux'
import { FilmDetails } from './FilmDetails'
import showings from './showings.json'
import logo from './assets/daam.png'

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export const Landing = ({ films, selectedDate, selectedFilm, showFilmDetails }) => {
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }

  const closeModal = () => { dispatch({ type: 'HIDE_FILM_DETAILS' }) }

  return (
    <View>
      <Modal animationType="slide" visible={showFilmDetails}>
        <FilmDetails selectedDate={selectedDate} film={selectedFilm} showings={showings} />
        <Button title="Done" onPress={closeModal} />
      </Modal>

      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 50, height: 50 }} source={logo} />
        <Text>Dinner and a Movie</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <DatePicker selectedDate={selectedDate} />
        {films.map((film) => (
          <FilmBrief key={film.id} film={film} selected={film === selectedFilm} />
        ))}
      </ScrollView>
    </View>
  )
}
