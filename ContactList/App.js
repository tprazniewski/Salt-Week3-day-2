import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './screens/ContactList';
import CustomerProfile from './screens/CustomerProfile';

export default function App() {

  const {Navigator, Screen} = createStackNavigator();
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
           <NavigationContainer>
            <Navigator>
              <Screen name='Name' component={ContactList}/>
              <Screen name='Surname' component={CustomerProfile}/>
            </Navigator>
          </NavigationContainer> 
        </SafeAreaView>
      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
