import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: StatusBar.currentHeight || 0
    },
    header: {
        fontSize: 30,
        backgroundColor: 'lightblue',
        textAlign: 'center'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'lightgreen',
        padding: 5,
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        fontSize: 25
    },
    text: {
        alignSelf: 'center'
    },
    totalText: {
        alignSelf: 'center',
        fontSize: 20
    },
    footer: {
        marginTop: 10,
        backgroundColor: 'lightblue',
        textAlign: 'center'
    }
  });