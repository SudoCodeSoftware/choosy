/import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import * as firebase from 'firebase';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
/*
var Login = React.createClass({
  render: function() {
    return (
      
    );
  }
});
*/
class Choosy extends Component {
  render() {
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
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
    );
  }
}

AppRegistry.registerComponent('Choosy', () => Choosy);