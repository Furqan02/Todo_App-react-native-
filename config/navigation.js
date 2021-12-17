import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Add from '../screens/add';
import Edit from '../screens/edit';
const Stack = createNativeStackNavigator();

function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'TODOS LIST',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: 'bold',
            color: '#2596be'
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShown: false
        }} />
        <Stack.Screen name="Add" component={Add} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Edit" component={Edit} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;