import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import signIn from './signIn'

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href="/(auth)/signIn">Go to Sign In</Link>
    </View>
  )
}

export default signUp