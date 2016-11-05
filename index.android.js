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
//自定义组件
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
export default class AwesomeProject extends Component {
  render() {
      let pic = {
        uri: 'http://uhero.cc/uploads/images/qjbj.jpg'
      };
      return (
          <View>
              <Text>Hello World!</Text>
              <Image source={pic} style={{width: 200, height: 200}} />

              <Greeting name='张三' />
              <Greeting name='李四' />
              <Greeting name='王二' />
          </View>
      );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
