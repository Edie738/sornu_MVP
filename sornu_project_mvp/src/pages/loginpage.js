import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from '../components/logo'

export default class Login extends Component<{}> {
    render() {
        return (
            <View>
              <Logo/>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#69f0ae',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

