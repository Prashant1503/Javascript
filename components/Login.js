import React from 'react';
import {Text, View, Button} from 'react-native';

const Login = ({title}) => {
  return (
    <View>
      <Text style={{fontSize: 21}}>Login Screen</Text>
      <Button title={title} onPress={() => alert('Hey')}></Button>
    </View>
  );
};

export default Login;
