import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Design from './src/components/Design/Design';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"  
          component={HomeScreen}
          options={{
            title: 'WOCO.KI',
            headerTintColor:'white',
            headerStyle: { 
              shadowOpacity: 0,
              backgroundColor: "#2e2f41",
              
            },
            headerRight: () => (
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}
                onPress={() => alert('Sağ butona tıklandı!')}
              >
                <Text style={{ marginRight: 5 }}><Ionicons name="notifications-outline" size={30} color="white" /></Text>
                
              </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}
                  onPress={() => alert('Sağ butona tıklandı!')}
                >
                  <Text style={{ marginLeft:15, }}><Feather name="list" size={30} color="white" /></Text>
                  
                </TouchableOpacity>
                ),
            headerTitleStyle:{
              fontSize:20,
              fontWeight:'400',
            },
          }}
        />
        <Stack.Screen
          name="CategoriesScreen" 
          component={CategoriesScreen}
          options={{
            title: 'WOCO.KI',
            headerBackTitle: "",
            headerStyle: {
              shadowOpacity: 0,
              backgroundColor: "#f7f7f7",
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 20,fontWeight:'500', marginRight: 10 }}>
                  WOCO.KI
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}
                onPress={() => alert('Sağ butona tıklandı!')}
              >
                <Text style={{ marginRight: 5 }}><Ionicons name="notifications-outline" size={24} color="black" /></Text>
                
              </TouchableOpacity>
            ),
           
          }}
        />
        <Stack.Screen
          name="Design"
          component={Design}
          options={{
            title: 'Design',
            headerBackTitle: "",
            headerStyle: {
              shadowOpacity: 0,
              backgroundColor: "#f7f7f7",
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}
                onPress={() => alert('Sağ butona tıklandı!')}
              >
                <Text style={{ marginRight: 20 }}><Ionicons name="notifications-outline" size={24} color="black" /></Text>
                <Ionicons name="git-network-outline" size={24} color="black" style = {styles.design} /> 
                </TouchableOpacity>
            ),
           
          }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  design:{ transform: [{ rotate: '90deg' }]},
});
