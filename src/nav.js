'use strict';

import React from 'react-native';
import { App } from './app';
import NavigationBar from 'react-native-navbar';

const { Navigator, View, StyleSheet } = React;

export class Navigation extends React.Component {

  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  render() {

    const titleConfig = {
      title: 'React Native Alt Demo',
      tintColor: 'white'
    }

    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          navigationBar: <NavigationBar title={titleConfig} />
        }}
      />
    );
  }

  renderScene(route, navigator) {
    const Component = route.component;
    const navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        style: styles.navColor,
        titleColor: 'white',
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.appContainer}>
        {navBar}
        <Component
          navigator={navigator}
          route={route}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  navColor: {
    'backgroundColor': '#3B5998'
  },
  appContainer: {
    flex: 1,
    backgroundColor: 'white'
  }
});

