import React from 'react'
import { View, Text, ScrollView,StyleSheet,Image, Button } from 'react-native'

function Design() {
  const currentDate = new Date();
  const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
  
      const formattedDate = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
  return (
    <ScrollView style = {{backgroundColor:'#f7f7f7'}}>  
      <View style = {styles.box1}>
        <Text style = {styles.text1}>{formattedDate}</Text>
        <Text style = {styles.text2} >10 Mins read</Text>
      </View>
      <View style = {styles.box2}>
      <Text style = {styles.text3}>Some examples of computer set up that suits to your styles. Minimalist with modern touch.</Text>
      </View>
      <View style = {styles.box3}>
      <Image style = {styles.image} source={require('../../../assets/Person.jpg')}/>
      <Text style = {styles.text4}>Eren Yaeger</Text>
      <View style = {styles.textbox}>
      <Text style={styles.text5}>DESIGN</Text> 
      </View>    
      </View>
      <View>
        <Text></Text>
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
  box3:{
    flexDirection:'row',
    padding:10,
    marginTop:20,
    justifyContent:'space-between',


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
    fontSize:17,
    fontWeight:'600',
    marginRight:120,
    opacity:0.4,
    marginTop:15,
  },
  text5:{
    fontSize:13,
    fontWeight:'bold',
    opacity:0.5,
  },
  image :{
    width:50,
    height:50,
  },
    textbox: {
        width: 80,
        height: 40,
        backgroundColor: 'rgba(227,228,231, 0.7)',
        top: 10,
        marginRight:0,
        justifyContent:'center',
        alignItems:'center',  
  },
  


})

export default Design;