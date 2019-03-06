import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 60,
    justifyContent: 'flex-end',
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey'
  }, 
})

export default class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter an item!"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}
