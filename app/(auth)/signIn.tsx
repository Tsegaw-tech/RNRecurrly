import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/(auth)/signUp">Go to Sign Up</Link>
    </View>
  )
}

export default signIn