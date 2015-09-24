'use strict';

import React from 'react-native';
import { App } from './app';
import NavigationBar from 'react-native-navbar';

let { Navigator, View, StyleSheet } = React;

export class Navigation extends React.Component {

  render() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App,
          navigationBar: <NavigationBar title='React Native Alt Demo'/>
        }}
      />
    );
  }

  renderScene(route, navigator) {
    let Component = route.component;
    let navBar = route.navigationBar;

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

let styles = StyleSheet.create({
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

