import React from 'react';
import Index from './components/Index';
import Play from './components/Play';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Index: {screen: Index},
  Play: {screen: Play},
});

const App = createAppContainer(MainNavigator);

export default App;

/*
export default function App() {
  return (
    <Index />
  );
}
*/