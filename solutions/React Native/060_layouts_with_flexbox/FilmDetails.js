import React from 'react'
import { Text, SafeAreaView, Image, View } from 'react-native'
import { host } from './api'
import { FilmImage } from './FilmImage'

export const FilmDetails = ({ selectedDate, film, showings }) => {
  return (
    <SafeAreaView>
      <View style={{ flexBasis: 400 }}>
        <FilmImage film={film} style={{ flex: 1, resizeMode: 'contain' }} />
      </View>
      <Text>Showing times for {selectedDate.toDateString()}</Text>
      {/*<Showings showings={showings} selectedDate={selectedDate} />*/}
      <View style={{ flexDirection: 'row' }}>
        {showings.map(showing => (
          <Text key={showing.id}>{showing.showing_time}</Text>
        ))}
      </View>
      <Text>{film.title}</Text>
      <Text>{film.tagline}</Text>
      <Text>{film.homepage}</Text>
      <Text>{film.overview}</Text>
      <Text>Release date: {film.release_date}</Text>
      <Text>Running time: {film.runtime} minutes</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Rating: {film.vote_average}/10</Text>
        <Text>{film.vote_count} votes</Text>
      </View>
    </SafeAreaView>
  )
}
