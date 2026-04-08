import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import signIn from './signIn'
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
 
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

const signUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
      <Text>signUp</Text>
      <Link href="/(auth)/signIn">Go to Sign In</Link>
    </SafeAreaView>
  )
}

export default signUp