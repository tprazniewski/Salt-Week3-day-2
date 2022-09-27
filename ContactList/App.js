import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './screens/ContactList';
import CustomerProfile from './screens/CustomerProfile';

export default function App() {

  const {Navigator, Screen} = createStackNavigator();
  return (
           <NavigationContainer style={styles.container}>
            <Navigator initialRouteName="List" style={styles}>
              <Screen name='List' component={ContactList}/>
              <Screen name='Profile' component={CustomerProfile}/>
            </Navigator>
          </NavigationContainer>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#EAEAEA",
  },
});
