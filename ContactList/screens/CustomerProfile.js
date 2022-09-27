import React from 'react'
import {Text,StyleSheet, Image} from 'react-native'
import {customers} from '../data/customers'
import {View} from 'react-native'


function CustomerProfile(route, props) {

    return (

    <View style={styles.container} >
        {customers.map((e)=> <Image onPress={()=> props.navigation.navigate('Name')} source={{uri: e.picture.medium}} style={styles.logo}/>) }
    </View>
  )
}

export default CustomerProfile


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'center',

    },
    logo: {
        width: 66,
        height: 58,
      }
  });