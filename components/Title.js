import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    flexDirection: 'column',
    height: 60,
    justifyContent: 'flex-end',
    padding: 10,
  }, 
})

export default class Title extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List</Text>
      </View>
    )
  }
}
