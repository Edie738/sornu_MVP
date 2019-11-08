import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class Forms extends Component<{}> {
  render() {
    return (
        <View style={styles.container} >
            <TextInput style={styles.textbox}
                placeholderTextColor= "#ffffff"
                placeholder= "Email" />
            
            <TextInput style={styles.textbox}
                placeholderTextColor= "#ffffff"
                placeholder= "password" />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
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
    textbox: {
        width:300,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 25,
        paddingHorizontal: 25,
        fontSize:16,
        padding: 16,
        marginVertical: 16,
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffffff',
    },
    btn: {
        backgroundColor: '#00251a',
        width:300,
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10,
    },
  });
    
 
