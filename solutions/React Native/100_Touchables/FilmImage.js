import React from 'react'
import { host } from './api'
import { Image } from 'react-native'

export const FilmImage = ({ film: { poster_path }, ...rest }) => (
  <Image
    source={{ uri: `${host}${poster_path}` }}
    {...rest}
  />
)
