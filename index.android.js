import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import * as firebase from 'firebase';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNxNYTT7Yk9-gPe7x8VOWD7pe22y8Mkp0",
  authDomain: "choosy-app-2809a.firebaseapp.com",
  databaseURL: "https://choosy-app-2809a.firebaseio.com",
  //storageBucket: "<your-storage-bucket>"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();

var accessToken;
var credential;
var errorCode;

class Choosy extends Component {

     constructor(props) {
        super(props);
        
        
    }
    
    render(){
        setInterval(function(){console.log(errorCode);}, 3000);
        
        return (
            <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            alert("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    alert(data.accessToken.toString());
                                    accessToken = data.accessToken.toString();
                                    
                                    credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
                                    
                                    firebase.auth().signInWithCredential(credential).catch(function(error) {
                                        // Handle Errors here.
                                        errorCode = error.code;
                                        var errorMessage = error.message;
                                        // The email of the user's account used.
                                        var email = error.email;
                                        // The firebase.auth.AuthCredential type that was used.
                                        var credential = error.credential;
                                        if (errorCode === 'auth/account-exists-with-different-credential') {
                                            alert('Email already associated with another account.');
                                            // Handle account linking here, if using.
                                        } else {
                                            console.error(error);
                                        }
                                    });
                                }
                            )
                        }
                    }
                }
                
                onLogoutFinished={() => alert("logout.")}/>
        );
    }
};

AppRegistry.registerComponent('Choosy', () => Choosy);

/*

   
*/