'use strict';

var React = require('react-native');
var App = require('./app');
var NavigationBar = require('react-native-navbar');
var SearchButton = require('./components/SearchButton');

var { Navigator, View } = React;

class Navigation extends React.Component {

  render() {
    return (
      <Navigator
        style={{flex: 1}}
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
        style: {'backgroundColor': '#00bcd4'},
        titleColor: 'white',
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
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

module.exports = Navigation;
