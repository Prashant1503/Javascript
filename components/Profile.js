import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Profile = props => {
  const {state} = props.navigation;

  return (
    <View>
      <Text>Hey,I am {state.params.name} </Text>
    </View>
  );
};

export default Profile;
