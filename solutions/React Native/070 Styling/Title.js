import { Text } from 'react-native'
import React from 'react'

export const Title = ({ children }) => (
  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
    {children}
  </Text>
)
