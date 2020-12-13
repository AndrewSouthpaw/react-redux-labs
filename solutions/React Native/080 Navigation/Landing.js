import React, { useState } from 'react'
import { Button, Image, Modal, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FilmBrief } from './FilmBrief'
import { DatePicker } from './DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { FilmDetails } from './FilmDetails'
import showings from './showings.json'
import logo from './assets/daam.png'
import { Title } from './Title'

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export const Landing = () => {
  const { films, selectedDate, selectedFilm, showFilmDetails } = useSelector(state => state)
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }

  const closeModal = () => { dispatch({ type: 'HIDE_FILM_DETAILS' }) }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Modal animationType="slide" visible={showFilmDetails}>
          <SafeAreaView style={styles.container}>
            <FilmDetails selectedDate={selectedDate} film={selectedFilm} showings={showings} />
            <Button title="Done" onPress={closeModal} />
          </SafeAreaView>
        </Modal>

        <View style={styles.header}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
          <Title>Dinner and a Movie</Title>
        </View>

        <Text>Tap a movie below to see its details. Then pick a date to see showtimes.</Text>
        <DatePicker selectedDate={selectedDate} />

        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          {films.map((film) => (
            <FilmBrief key={film.id} film={film} selected={film === selectedFilm} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

Landing.navigationOptions = {
  headerShown: false,
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row' },
  logo: {
    height: 75, width: 75,
  },
})

// return (
//   <SafeAreaView style={{ flex: 1, borderColor: 'purple', borderWidth: 3 }}>
//     <View style={{flex: 1, borderColor: 'yellow', borderWidth: 3}}>
//       <Modal animationType="slide" visible={showFilmDetails}>
//         <FilmDetails selectedDate={selectedDate} film={selectedFilm} showings={showings} />
//         <Button title="Done" onPress={closeModal} />
//       </Modal>
//
//       <View style={[styles.header, {borderColor: 'red', borderWidth: 3}]}>
//         <Image style={[styles.logo, {borderColor: 'green', borderWidth: 3}]} source={logo} resizeMode="contain" />
//         <Title>Dinner and a Movie</Title>
//       </View>
//       <Text>Tap a movie below to see its details. Then pick a date to see showtimes.</Text>
//       <ScrollView
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       >
//         <DatePicker selectedDate={selectedDate} />
//         {films.map((film) => (
//           <FilmBrief key={film.id} film={film} selected={film === selectedFilm} />
//         ))}
//       </ScrollView>
//     </View>
//   </SafeAreaView>
// )
// }
//
// const styles = StyleSheet.create({
//   header: { flex: 1, flexDirection: 'row', height: 80 },
//   logo: {
//     height: 75, width: 75,
//   },
// })
