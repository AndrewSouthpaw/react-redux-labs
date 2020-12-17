import React, { useState, useEffect } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('mount home')
    return () => { console.log('unmount home') }
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <Button
        title="Go to Detail"
        onPress={() => { navigation.navigate('Detail')}}
      />
      <Button
        title="Log out"
        onPress={async () => {
          await AsyncStorage.setItem('userToken', '')
          navigation.navigate('Auth')
        }}
      />
    </View>
  )
}

const DetailScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('mount detail')
    return () => { console.log('unmount detail') }
  })
  // console.log('navigation.state.params', navigation.state.params.itemId)
  console.log('safe', navigation.getParam('itemId'))
  const { itemId } = navigation.state.params || {}
  console.log('itemId', itemId)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Detail</Text>
      <Button
        title="Go to Checkout"
        onPress={() => { navigation.navigate('Checkout')}}
      />
      <Button
        title="Go back"
        onPress={() => { navigation.pop()}}
      />
    </View>
  )
}

const CheckoutScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 40 }}>Checkout</Text>
    <Button
      title="Go to Home"
      onPress={() => { navigation.navigate('Home')}}
    />
    <Button
      title="Go back"
      onPress={() => { navigation.pop()}}
    />
  </View>
)

const HomeStack = createStackNavigator({
  // routes
  Home: HomeScreen,
  Detail: DetailScreen,
  Checkout: CheckoutScreen,
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
    },
  },
})

const ProfileScreen = () => {
  useEffect(() => {
    console.log('mount ProfileScreen')
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Profile Screen</Text>
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Profile: ProfileScreen,
})

const SignInScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 40 }}>Sign In</Text>
    <Button
      title="Log in"
      onPress={async () => {
        await AsyncStorage.setItem('userToken', 'testToken')
        navigation.navigate('App')
      }}
    />
  </View>
)

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    (async () => {
      // check for an auth token
      const token = await AsyncStorage.getItem('userToken')
      navigation.navigate(token ? 'App' : 'SignIn')
    })()
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Auth Loading...</Text>
    </View>
  )
}

const AuthStack = createStackNavigator({
  AuthLoading: AuthLoadingScreen,
  SignIn: SignInScreen,
})

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    App: TabNavigator,
  }, {
    initialRouteName: 'Auth',
  }),
)

const debugView = (color) => ({ borderColor: color, borderWidth: 5 })

export const App = () => {
  return (
    <AppContainer />
  )
}

App.navigationOptions = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
