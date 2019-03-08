import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems:'flex-start',
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey'
  }, 
  input: {
    height: 40,
  },
})

export default class Input extends Component {

  state = {
    inputText: null
  }

  handleChange = (text) => {
    this.setState({
      inputText: text,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          editable = { true }
          style={styles.input}
          placeholder="Enter an item!"
          onChangeText={this.handleChange}
          value={this.state.inputText}
        />
      </View>
    )
  }
}
