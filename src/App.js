/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import Login from './Login';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBnX5i-_s9Qjmvy8bV1n_Qe-FWtwKV-AFk",
            authDomain: "crm-app-2b59b.firebaseapp.com",
            databaseURL: "https://crm-app-2b59b.firebaseio.com",
            projectId: "crm-app-2b59b",
            storageBucket: "",
            messagingSenderId: "29437328704"
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});