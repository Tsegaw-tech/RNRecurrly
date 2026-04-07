import "../../global.css";

import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
 
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link href="/(auth)/signIn" className="mt-4 text-primary">
        Go to Sign In
      </Link>

         <Link href="/(auth)/signUp" className="mt-4 text-primary">
        Go to Sign Up
      </Link>

      <Link href="/subscriptions" className="mt-4 text-primary">
        Spotfy Subscriptions
      </Link>
      <Link href= {{ 
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}}} className="mt-4 text-primary">
        Spotfy Subscription Details
      </Link>
    </SafeAreaView>
  );
}