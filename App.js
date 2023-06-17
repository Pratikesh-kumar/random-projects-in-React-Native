import React from 'react';
import Occupation from './src/components/Occupation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/components/Profile';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Occupation"
          component={Occupation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" 
        component={Profile} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
