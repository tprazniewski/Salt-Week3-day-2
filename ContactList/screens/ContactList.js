import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {customers} from '../data/customers'
import {View} from 'react-native'


function ContactName(props) {
  return (

    <View style={styles.container}>
        {customers.map((e)=> <Text onPress={()=> props.navigation.navigate('Profile')} > {e.name.first} {e.name.last} </Text>) }
    </View>
  )
}

export default ContactName

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'top',

    }
  });