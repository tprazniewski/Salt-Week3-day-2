import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {customers} from '../data/customers'
import {View} from 'react-native'


function ContactName(props) {
  return (

    <View >
        {customers.map((e)=> <Text onPress={()=> props.navigation.navigate('Surname')} > {e.name.first} {e.name.last} {e.gender}</Text>) }
    </View>
  )
}

export default ContactName

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      
    },
    textContainer: {
      // flexDirection: 'column',
      // justifyContent: 'space-between'
    },
  });