import React from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import indexStyles from '../css/indexStyles';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: '',
      user2: '',
    }
  }

  sendNames() {
    const { user1, user2 } = this.state;
    this.props.navigation.navigate('Play', {user1: user1, user2: user2})
  }

  render() {
    return (
      <View style={indexStyles.container}>
        <View style={indexStyles.header}>
          <Text style={indexStyles.title}>Inicio</Text>
        </View>

        <View style={indexStyles.body}>

          <View style={indexStyles.playerDataBox}>
            <Text style={indexStyles.playerName}>Jugador 1: </Text>
            <TextInput
              style={indexStyles.playerNameInput}
              placeholder='Ingrese el nombre del jugador 1'
              onChangeText={(text) => this.setState({user1: text})}
              value={this.state.user1}
            />
          </View>
          
          <View style={indexStyles.playerDataBox}>
            <Text style={indexStyles.playerName}>Jugador 2: </Text>
            <TextInput
              style={indexStyles.playerNameInput}
              placeholder='Ingrese el nombre del jugador 2'
              onChangeText={(text) => this.setState({user2: text})}
              value={this.state.user2}
            />
          </View>

          <View style={indexStyles.sendButton}>
            <Button
              title='Ingresar'
              color='#757575'
              onPress={() => this.sendNames()}
            />
          </View>

        </View>
      </View>
    );
  }
}