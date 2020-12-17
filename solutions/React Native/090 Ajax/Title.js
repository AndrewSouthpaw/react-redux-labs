import { Text } from 'react-native'
import React from 'react'

export const Title = ({ children, style }) => (
  <Text style={{ fontSize: 30, fontWeight: 'bold', ...style }}>
    {children}
  </Text>
)
