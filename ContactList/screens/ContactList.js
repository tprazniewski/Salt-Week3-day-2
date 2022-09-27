import React from "react";
import { Text, StyleSheet,FlatList } from "react-native";
import { customers } from "../data/customers";
import { View } from "react-native";

function CustomerProfile(props) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contactList}
        data={customers}
        renderItem={({ item }) => (
          <Text onPress={() => props.navigation.navigate("Profile", item)}>
            {item.name.first + " " + item.name.last}
          </Text>
        )}
      />
    </View>
    // <View style={styles.container}>
    //    {customers.map((e)=> <Text onPress={()=> props.navigation.navigate('Profile')} > {e.name.first} {e.name.last} </Text>) }
    // </View>
  );
}

export default CustomerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
});
