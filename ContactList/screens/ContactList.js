import React from "react";
import { Text, StyleSheet,FlatList } from "react-native";
import { customers } from "../data/customers";
import { View, Button } from "react-native";
import { useState } from "react";

function ContactList({navigation}) {
  // const [user, setUser] = useState(customers);

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={customers}
        // data={user}
        renderItem={({ item }) => (
          <Button
            title={item.name.first}
            onPress={() => navigation.navigate("Profile", item)}
          />
        )}
      />
    </View>
 
  );
}
{/* <View style={styles.container}>
{customers.map((e)=> <Text onPress={()=> navigation.navigate('Profile',{id: "hejlo"})} > {e.name.first} {e.name.last} </Text>) }
</View> */}
export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
});
