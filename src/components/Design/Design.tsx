import React from 'react'
import { View, Text, ScrollView,StyleSheet,Image } from 'react-native'

function Design() {
  const currentDate = new Date();
  const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
  
      const formattedDate = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
  return (
    <ScrollView>
      <View style = {styles.box1}>
        <Text style = {styles.text1}>{formattedDate}</Text>
        <Text style = {styles.text2} >10 Mins read</Text>
      </View>
      <View style = {styles.box2}>
      <Text style = {styles.text3}>Some examples of computer set up that suits to your styles. Minimalist with modern touch.</Text>
      </View>
      <View style = {styles.image}>
      <Text style = {styles.text4}>Eren Yaeger</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  box1:{
    flexDirection:'row',
    padding:10,
    opacity:0.5,
  },
  box2:{
    marginTop:20,
    marginLeft:30,
    marginRight:30,
  },
  image:{

  },
  text1:{
    fontSize: 15,
    marginLeft:20,
    fontWeight:'500',  
  },
  text2:{
    fontSize:15,
    marginLeft:50,
    fontWeight:'500',
  },
  text3:{
    fontSize:20,
    fontWeight:'bold',
    lineHeight:27,
  },
  text4:{
    fontSize:15,
    fontWeight:'500',
    marginLeft:20,
    opacity:0.5,
  },


})

export default Design;