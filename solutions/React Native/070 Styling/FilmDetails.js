import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FilmImage } from './FilmImage'
import { ShowingTimes } from './ShowingTimes'
import { Title } from './Title'

export const FilmDetails = ({ selectedDate, film, showings }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.posterContainer}>
          <FilmImage film={film} style={styles.poster} />
        </View>
        {showings && selectedDate &&
        <ShowingTimes selectedDate={selectedDate} showings={showings} />}
        <Title>{film.title}</Title>
        <Text style={styles.tagline}>{film.tagline}</Text>
        <Text style={styles.homepage}>{film.homepage}</Text>
        <Text style={styles.overview}>{film.overview}</Text>
        <Text style={styles.release_date}>Release date: {formatReleaseDate(film.release_date)}</Text>
        <Text style={styles.runtime}>Running time: {film.runtime} minutes</Text>
        <View style={styles.ratingsRow}>
          <Text style={styles.bigRating}>
            Rating: {film.vote_average}/
            <Text style={styles.smallRating}>10</Text>
          </Text>
          <Text>{film.vote_count} votes</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  posterContainer: {},
  poster: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 400, width: 400,
  },
  tagline: {
    fontSize: 20,
  },
  homepage: {
    paddingBottom: 10,
  },
  overview: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  runtime: {
    paddingTop: 10,
  },
  ratingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  bigRating: {
    fontSize: 20,
  },
  smallRating: {
    fontSize: 10,
  },
})

const formatReleaseDate = (releaseDate) => {
  return new Date(releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
