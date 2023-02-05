import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import Stamps from "./src/Screens/Stamps";
import Settings from "./src/Screens/Settings";
import PrimaryHandler from "./src/Screens/PrimaryNavHandler";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Stamps"
        component={Stamps}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Primary">
          <Stack.Screen
            name="Tabs"
            component={TabNav}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Primary"
            component={PrimaryHandler}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
