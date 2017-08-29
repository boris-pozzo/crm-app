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
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
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
});

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    onButtonPress = () => {
        console.log('Clicked button !');
    }


  render() {
      const { email, password, error } = this.state;
      const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;

    return (
      <View style={container}>
        <Text style={welcome}>
          Welcome to the crm moda fucka!
        </Text>
        <MKTextField
            text={email}
            onTextChange={email => this.setState({ email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField
            text={password}
            onTextChange={password => this.setState({ password })}
            textInputStyle={fieldStyles}
            placeholder={'password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <Text style={errorMessage}>
            {error}
        </Text>
        <View style={loginButtonArea}>
            <LoginButton onPress={this.onButtonPress()}/>
        </View>
      </View>
    );
  }
}