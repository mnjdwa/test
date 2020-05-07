import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Posts from "../screens/users";
const Stack = createStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={
            Posts
          }
          options={{
            title: "Posts",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation