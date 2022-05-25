import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import About from './src/screens/About';
import SignUp from './src/screens/SignUp';
import Contact from './src/screens/Contact';
import Home from './src/screens/Home';
//
const Drawer = createDrawerNavigator();
             
function App() {
  const arr=[{name:'Login', component:()=>{return Login;}},{name:'Contact', component:()=>{return Contact;}}];

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      
      <Drawer.Screen name="Home" component={Home} />

      {arr.map((x)=>{
        const c1 = x.component();
      return( <Drawer.Screen name={x.name} component={c1} />)
      })}
                       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
