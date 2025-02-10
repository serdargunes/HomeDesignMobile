import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native'
import { teal100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

function Design() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDate = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
  return (
    <ScrollView style={{ backgroundColor: '#f7f7f7' }}>
      <View style={styles.box1}>
        <Text style={styles.text1}>{formattedDate}</Text>
        <Text style={styles.text2} >10 Mins read</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text3}>Some examples of computer set up that suits to your styles. Minimalist with modern touch.</Text>
      </View>
      <View style={styles.box3}>
        <Image style={styles.image} source={require('../../../assets/Person.jpg')} />
        <Text style={styles.text4}>Eren Yaeger</Text>
        <View style={styles.textbox}>
          <Text style={styles.text5}>DESIGN</Text>
        </View>
      </View>
      <View style={styles.box4}>
        <Image style={styles.image1} source={{ uri: "https://sanliklima.com/wp-content/uploads/2021/01/b9.jpg" }} />
        <View style = {styles.box2}>
        <Text style = {styles.text6}>So you have got a new computer. Awesome! That humble metal box is the key to a wide world of potential.
          From creating digital art to writing code, from exploring the web to diving into gaming, your possibilities are endless.</Text>
        <Text style = {styles.text7}>Begin by setting up your workspace, customizing your preferences, and installing the essential software you need.
          Explore the web safely, learning about online security and privacy to protect your data.
          Try your hand at basic programming or design—who knows, you might discover a hidden talent!
          Your computer is not just for work but also for creativity and fun.
          Edit photos, produce music, or even write your first novel—it’s all within reach.
          With cloud storage and backup options, you can ensure your data stays safe no matter what happens.</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  box1: {
    flexDirection: 'row',
    padding: 10,
    opacity: 0.5,
  },
  box2: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  box3: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  box4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  text1: {
    marginTop: 20,
    fontSize: 15,
    marginLeft: 20,
    fontWeight: '500',
  },
  text2: {
    marginTop: 20,  
    fontSize: 15,
    marginLeft: 50,
    fontWeight: '500',
  },
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 27,
  },
  text4: {
    fontSize: 17,
    fontWeight: '600',
    marginRight: 100,
    opacity: 0.4,
    marginTop: 15,
  },
  text5: {
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  text6:{
    marginTop:20,
    fontSize:17,
    fontWeight: '500',
    
    
  },
  text7:{
    fontSize:17,
    marginTop:20,
    fontWeight: '500',

  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 20,
  },
  image1: {
    width: 375,
    height: 250,
  },
  textbox: {
    width: 80,
    height: 40,
    backgroundColor: 'rgba(227,228,231, 0.7)',
    top: 10,

    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },




})

export default Design;