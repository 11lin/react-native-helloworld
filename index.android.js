/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class AwesomeProject extends Component {
  render() {
      let pic = {
        uri: 'http://uhero.cc/uploads/images/qjbj.jpg'
      };
      return (
        <Image source={pic} style={{width: 193, height: 110}} />
      );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
