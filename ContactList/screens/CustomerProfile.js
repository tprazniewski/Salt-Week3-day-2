import React from "react";
import { Text, StyleSheet, Image,Button } from "react-native";
import { customers } from "../data/customers";
import { View } from "react-native";

// function CustomerProfile( {route, navigation}) {
function CustomerProfile(prop) {
  const customer = prop.route.params;
  console.log(customer);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Details Screen</Text>
        <Button title="Go home" onPress={() => prop.navigation.navigate("List")} />
      </View>
      <View >
        <Image source={{ uri: customer.picture.medium }} style={styles.logo} />
        <Text> {customer.name.first + " " + customer.name.last}</Text>
        <Text> {customer.email}</Text>
        <Text> {customer.phone}</Text>
      </View>
    </View>
  );
}

export default CustomerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});
