import React from 'react'
import { FlatList, TouchableOpacity, View, Text, Image } from 'react-native'
import CategoriesHome from '../../../assets/CategoriesHome'
import BannerDetail from '../BannerDetail/BannerDetail'

function Banner() {
    
    return (
       <View>
        <FlatList 
        data={CategoriesHome}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <BannerDetail item={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        
        />
       </View>
       

    )
}

export default Banner