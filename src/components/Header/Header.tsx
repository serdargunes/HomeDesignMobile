import React,{useState} from 'react'
import { View } from 'react-native'
import { Searchbar } from "react-native-paper";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style = {{marginTop:10,}}>
    <Searchbar style ={{borderRadius:0,margin:30,backgroundColor:'#3f4255'}} 
        placeholder='Search anything here'
        placeholderTextColor="#D3D3D3"
        iconColor='#D3D3D3'
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        icon="magnify"
        right={() =>
          <View style = {{
            justifyContent:'center',
             alignItems:'center',
             backgroundColor:'#f6ac7b',
             marginRight:7,
             width:40,
             height:40,
            
          
          }}>
          <MaterialCommunityIcons name="tune-vertical-variant" size={24} color="black" style = {{
            transform: [{ rotate: '90deg' }],
        }}
         /> 
        </View>
        }
    />
    </View>
  )
}

export default Header