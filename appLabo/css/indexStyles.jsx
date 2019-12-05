import { StyleSheet } from 'react-native';

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'white',
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    backgroundColor: 'gray',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 45,
    fontFamily: 'monospace',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  body: {
    flex: 6,
    backgroundColor: '#EEEEEE',
  },
  playerName: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'monospace',
    padding: 10,
  },
  playerNameInput: {
    alignSelf: 'stretch',
    backgroundColor: '#F5F5F5',
    height: 50,
    color: 'black',
    fontSize: 15,
    borderWidth: 1, 
    borderColor: '#E0E0E0',
    borderRadius: 20,
    padding: 10,
  },
  playerDataBox: {
    marginTop: 20,
    padding: 5,
  },
  sendButton: {
    margin: 10,
  },
});

export default indexStyles;