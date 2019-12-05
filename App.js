import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CounterIncrement from './screens/container_increment/index';
import CounterDecrement from './screens/container_decrement/index';
import HomeScreen from './screens/home/index';
import CostumDrawer from './src/components/customDrawer';
import { store } from './src/utils/store';
import BookScreen from './screens/book/index';
import BookDetailScreen from "./screens/bookDetail/index";
import { createStackNavigator } from 'react-navigation-stack';
import bookAdd from './screens/book/add';


const HomeNavigator = createDrawerNavigator({

  Home: {
    screen: HomeScreen,
  },
  Book: {
    screen: BookScreen,
  },
  CounterDecrement: {
    screen: CounterDecrement,
  },
  CounterIncrement: {
    screen: CounterIncrement,
  },
},
  {
    initialRouteName: 'Home',
    contentComponent: props => <CostumDrawer {...props} />
  }
);

const Navigator = createStackNavigator(
  {
    HomeNavigator,
    BookDetail : {screen : BookDetailScreen },
    bookAdd:{screen:bookAdd}
  },
  {
    initialRouteName: 'HomeNavigator',
    headerMode: 'none'
  }

);

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}