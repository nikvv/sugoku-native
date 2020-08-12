import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Start from './screens/Start';
import Game from './screens/Game';
import Finish from './screens/Finish';
import { Provider } from 'react-redux';
import store from './store'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Start"
            component={Start}
          />
          <Stack.Screen
            name="Game"
            component={Game}
          />
          <Stack.Screen
            name="Finish"
            component={Finish}
          />
          {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Finish" component={Finish} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}