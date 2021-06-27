import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Profile from './components/Profile';

const {width, height} = Dimensions.get('screen');

const App = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>React navigation</Text>
      <Button
        title="Visit profile page"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: App,
  Profile: Profile,
});

export default createAppContainer(AppNavigator);
