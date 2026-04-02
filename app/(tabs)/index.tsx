import "../../global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}