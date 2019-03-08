import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})


export default class List extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello</Text>
        <Checkbox />
      </ScrollView>
    )
  }
}
