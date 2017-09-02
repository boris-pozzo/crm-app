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
import Loader from "./Loader";
import firebase from 'firebase';

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
	errorMessage: {
		marginTop: 15,
		fontSize: 15,
		color: 'red',
		alignSelf: 'center'
	},
});

export default class Login extends Component {
	state = {
		email: '',
		password: '',
		loading: false,
		error: ''
	};

	onButtonPress = () => {
		const { email, password } = this.state;
		this.setState({ error: '', loading: true })

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onAuthSuccess())
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onAuthSuccess())
					.catch(this.onAuthFailed())
			});
	}

	onAuthSuccess = () => {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		})
	}

	onAuthFailed = () => {
		this.setState({
			error: 'Authentication Failed',
			loading: false
		})
	}

	renderLoader = () => {
		const { loading } = this.state;
		return loading ? <Loader size="large" /> : <LoginButton onPress={this.onButtonPress} />;
	}


	render() {
		const { email, password, error } = this.state;
		const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;

		return (
			<View style={form}>
				<Text> Login or create an account </Text>
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
					{this.renderLoader()}
				</View>
			</View >
		);
	}
}