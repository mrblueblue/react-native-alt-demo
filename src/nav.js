'use strict';

var React = require('react-native');
var App = require('./app');
var NavigationBar = require('react-native-navbar');
var SearchButton = require('./components/SearchButton');

var { Navigator, View, StyleSheet } = React;

class Navigation extends React.Component {

  render() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App,
          navigationBar: 
            <NavigationBar 
              title="React-Native-Alt-Demo" 
              customNext={ <SearchButton handlePress={this.props.toggle}/> }
            />
        }}
      />
    );
  }

  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

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
          edit={this.props.edit}
          toggle={this.props.toggle} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  navColor: {
    'backgroundColor': '#00bcd4'
  },
  appContainer: {
    flex: 1, 
    backgroundColor: '#f9f9f9'
  }
});

module.exports = Navigation;
