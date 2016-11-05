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
//闪烁的效果
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
  }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
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

              <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' />

              <Text style={styles.bigblue} onPress={function() {
                  alert("点击事件")
              }}>click styles bigblue</Text>
              <Text style={styles.red}>styles red</Text>

              <Text style={{fontWeight: 'bold'}}>
                I am bold
                <Text style={{color: 'red'}}>
                  and red
                </Text>
              </Text>
          </View>
      );
  }
}
class FixedDimensionsBasics extends Component {
  render() {
    return (
    //   <View>
    //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
    //     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    //   </View>
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
