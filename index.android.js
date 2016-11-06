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
  Image,
  TextInput,
  ScrollView,
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
// 使用Flexbox布局
// 布局参考http://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment#_rnd1478434262250
class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
// 使用Flexbox布局
class JustifyContentBasics extends Component {
  render() {
    return (
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around', //flex-start、center、flex-end、space-around以及space-between
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',//flex-start、center、flex-end、space-around以及space-between
        alignItems: 'center',//flex-start、center、flex-end以及stretch。只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
class FlexboxBasics extends Component {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text>FlexDirectionBasics</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <Text>JustifyContentBasics</Text>
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-around', //flex-start、center、flex-end、space-around以及space-between
                }}>
                  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <Text>AlignItemsBasics</Text>
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',//flex-start、center、flex-end、space-around以及space-between
                  alignItems: 'center',//flex-start、center、flex-end以及stretch。只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
                }}>
                  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        );
    }
}
// 处理文本输入
class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="输入单词转换成披萨"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Text>🍕🍕🍕🍕🍕</Text>
      </View>
    );
  }
}
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Whats the best</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}
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
AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockedMe);
