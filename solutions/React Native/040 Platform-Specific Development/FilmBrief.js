import React from 'react'
import { Image, Text, View } from 'react-native'
import { host } from './api'

export const FilmBrief = ({ film: { id, title, tagline, poster_path } }) => (
  <View key={id}>
    <Image
      source={{ uri: `${host}${poster_path}` }}
      style={{ height: 100, width: 100, resizeMode: 'contain' }}
    />
    <Text>{title}</Text>
    <Text>{tagline}</Text>
  </View>
)
