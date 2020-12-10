import React from 'react'
import { Text, ScrollView } from 'react-native'

export const FilmDetails = ({ selectedDate, film, showings }) => {
  return (
    <ScrollView>
      <Text>Showing times for {selectedDate.toDateString()}</Text>
      {/*<Showings showings={showings} selectedDate={selectedDate} />*/}
      {showings.map(showing => (
        <Text key={showing.id}>{showing.showing_time}</Text>
      ))}
      <Text>{film.title}</Text>
      <Text>{film.tagline}</Text>
      <Text>{film.homepage}</Text>
      <Text>{film.overview}</Text>
      <Text>Release date: {film.release_date}</Text>
      <Text>Running time: {film.runtime} minutes</Text>
      <Text>Rating: {film.vote_average}/10</Text>
      <Text>{film.vote_count} votes</Text>
    </ScrollView>
  )
}
