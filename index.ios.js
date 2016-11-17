'use strict';
import React from 'react';
import Component from 'react';
import ReactNative from 'react-native';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';


import Account from './src/pages/account';
import Login from './src/pages/login'

import Header from './src/components/header';

import Firebase from 'firebase';

import firebase from 'firebase';


import styles from './src/styles/common-styles.js';

class choosy extends React.Component {    

  constructor(props){
    super(props);
    this.state = {
      component: Login,
      loaded: true
    };
  }

  render(){

    if(this.state.component){
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }else{
      return (
        <View style={styles.container}>
          <Header text="React Native Firebase Auth" loaded={this.state.loaded} />  
          <View style={styles.body}></View>
        </View>
      );
    }

  }

}

AppRegistry.registerComponent('choosy', () => choosy);
