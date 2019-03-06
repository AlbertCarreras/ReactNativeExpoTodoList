import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    color: 'red',
    flexDirection: 'column',
    height: 60,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey'
  }, 
  red: {
    color: 'red',
  },

})

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Remove completed items</Text>
      </View>
    )
  }
}
