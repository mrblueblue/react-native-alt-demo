# react-native-alt-demo

*Type in a location and see a stream of the most recent tweets for that location.*

This application demos [Alt/Flux](https://github.com/goatslacker/alt) and integration with [React-Native](https://github.com/facebook/react-native). 

You can quickly bootstrap your React-Native development by using the application as a boilerplate example. 

The application communicates with the Twitter and Google API via an [iojs server](https://github.com/mrblueblue/iojs-generators-example) I deployed to Heroku.

Build upon this as you wish!

### Getting Started

```
npm install
npm start
```

### Organization

The root file entry point is `index.android.js` or `index.ios.js`. This points to `src/nav.js`, which renders `src/app.js`.

`src/nav.js` holds the all the logic related to app navigation. You can think of this a a 'router'.

`src/app.js` is the main application component that is hooked up to the Alt stores and actions.

### Contributing

All contributions are welcome!
