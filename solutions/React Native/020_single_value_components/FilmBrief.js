import React from 'react'
import { Image, Text, View } from 'react-native'

export const FilmBrief = ({ film: { id, title, tagline, poster_path } }) => (
  <View key={id}>
    <Image
      source={{ uri: `http://localhost:3007${poster_path}` }}
      style={{ height: 100, width: 100, resizeMode: 'contain' }}
    />
    <Text>{title}</Text>
    <Text>{tagline}</Text>
  </View>
)
