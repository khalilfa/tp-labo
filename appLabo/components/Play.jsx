import React from 'react';
import { Text } from 'react-native';

const Play = (props) => {
  const user1 = props.navigation.getParam('user1', 'd1');
  const user2 = props.navigation.getParam('user2', 'd2');
  return <Text>{ user1 } + { user2 }</Text>
}

export default Play;