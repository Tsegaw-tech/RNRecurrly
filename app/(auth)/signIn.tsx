import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
 
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);
const signIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
      <Text>signIn</Text>
      <Link href="/(auth)/signUp">Go to Sign Up</Link>
    </SafeAreaView>
  )
}

export default signIn