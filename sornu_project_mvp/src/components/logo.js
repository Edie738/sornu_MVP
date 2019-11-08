import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
        <View style={styles.container} >
            <Image style={{width: 90, height: 90, borderBottomLeftRadius:25, borderTopRightRadius:25}}
                source={require('../images/sornu.jpg')}/>
            <Text style={styles.logotext}>WELCOME TO sornu.ai</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logotext: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.9)',
        paddingTop: 15,
    },
  });
    
 
