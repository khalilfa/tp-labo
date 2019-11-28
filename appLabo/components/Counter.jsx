import React from 'react';
import { Text, Button, View } from 'react-native';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
  }

  render() {
    const { number } = this.state;
    return(
      <View>
        <Text>
          { number }
        </Text>

        <Button 
          title="Sumar"
          onPress={() => this.setState({ number: number + 1})}
        />
      </View>
    );
  }
}

export default Counter;