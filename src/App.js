import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SplashScreen } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen/>
      {/* <SignIn/> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

  
})
