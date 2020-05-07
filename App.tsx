import React from "react";
import { Provider } from "react-redux"
import store from "./redux/store"
import Navigation from "./route/navigation";
import { View, Text } from "react-native";
import Posts from "./screens/users";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      <Posts></Posts>
    </Provider>

    // <View>
    //   <Text>
    //     post
    //   </Text>

    // </View>
  )
}
export default App;