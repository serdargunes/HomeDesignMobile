import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions, ActivityIndicatorComponent } from 'react-native'
import CategoriesHome from '../../../assets/CategoriesHome'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation} from '@react-navigation/native' 
interface BannerDetailProps {
    item: {
      id: string;
      name: string;
      image: string;
      subCategories: string[];
    };
  }
  
  function BannerDetail({ item }: BannerDetailProps) {
    const navigation = useNavigation();
      const currentDate = new Date();
  
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
  
      const formattedDate = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
  
      return (
          <TouchableOpacity>
              <View style={styles.box2}>
                  <View style={styles.imagebox}>
                      <Image source={{ uri: item.image }} style={styles.image} />
                      <View style={styles.minibox}>
                          <Text style={styles.textbox}>Design</Text>
                      </View>
                      <View style={styles.textbox2}>
                          <Text><AntDesign name="hearto" size={24} color="black" /></Text>
                      </View>
                      <View style={styles.textbox3}>
                          <Text><Ionicons name="git-network-outline" size={24} color="black" /></Text>
                      </View>
                  </View>
                  <Text numberOfLines={2} ellipsizeMode='tail' style={styles.text}>
                      {item.subCategories.join(", ")}
                  </Text>
                  <Text style={styles.textDate}>{formattedDate}</Text>
              </View>
          </TouchableOpacity>
      );
  }
  
    
const styles = StyleSheet.create({
    box2: {
        width: 350,
        height: 350,
        marginLeft: 30,
        marginBottom: 3,
        marginTop: 3,
        borderRadius: 5,
        borderColor: "white",
        borderWidth: 5,
        backgroundColor: '#ffffff',
    },
    imagebox: {
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowRadius: 50,


    },
    image: {
        padding: 5,
        width: 330,
        height: 210,
        marginLeft: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 300,
        textAlign: "left",
        marginLeft: 10,
        marginTop: 20,
        lineHeight: 23,

    },
    textDate: {
        marginTop: 30,
        fontSize: 15,
        marginLeft: 10,
        opacity: 0.5,
        fontWeight: 'bold'
    },
    minibox: {
        width: 75,
        height: 30,
        borderBlockColor: 'black',
        backgroundColor: 'rgba(227,228,231, 0.3)',
        position: 'absolute',
        top: 10,
        marginLeft: 17,
    },
    textbox: {
        fontSize: 16,
        color: 'black',
        opacity: 0.5,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    textbox2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'rgba(227,228,231, 0.3)',
        position: 'absolute',
        right: 17,
        top: 10,
    },
    textbox3: {
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(227,228,231, 0.3)',
        position: 'absolute',
        transform: [{ rotate: '90deg' }],
        right: 17,
        top: 56,
    }

})

export default BannerDetail