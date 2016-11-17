'use strict';
import React from 'react';
import Component from 'react';
import ReactNative from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';

import Account from './account';

import Firebase from 'firebase';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDNxNYTT7Yk9-gPe7x8VOWD7pe22y8Mkp0",
  authDomain: "choosy-app-2809a.firebaseapp.com",
  databaseURL: "https://choosy-app-2809a.firebaseio.com/",
  storageBucket: "",
};
firebase.initializeApp(config);


import styles from '../styles/common-styles.js';

export default class login extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Header text="Login" loaded={this.state.loaded} />
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />

          <Button
            text="Login With Facebook"
            onpress={this.loginWithFacebook.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />
        
        </View>
      </View>
    );
  }

  login(){

    this.setState({
      loaded: false
    });

    app.authWithPassword({
      "email": this.state.email,
      "password": this.state.password
    }, (error, user_data) => {

      this.setState({
        loaded: true
      });

      if(error){
        alert('Login Failed. Please try again');
      }else{
        AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigator.push({
          component: Account
        });
      }
    });


  }

  loginWithFacebook(){
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
      });

  }

}

AppRegistry.registerComponent('login', () => login);
