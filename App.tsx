import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { compose, createStore } from 'redux';
import logger from 'redux-logger';
import Navigation from './src/navigations/Navigation';
import rootReducer from './src/store/reducer/rootReducer';

const store = createStore(rootReducer, compose(
  applyMiddleware(logger)
))

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
