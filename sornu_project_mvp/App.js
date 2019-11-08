import React, { Component }  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './src/pages/loginpage'

export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor= "#00251a" barStyle= "light-content"/>
        <Login/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
