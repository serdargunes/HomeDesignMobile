import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../../screens/HomeScreen/HomeScreen'
import CategoriesScreen from '../../../screens/CategoriesScreen/CategoriesScreen'
import Design from '../../Design/Design'

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          )
        }}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        
      />
      
    </Stack.Navigator>
    
  );
}

export default HomeNavigator;
