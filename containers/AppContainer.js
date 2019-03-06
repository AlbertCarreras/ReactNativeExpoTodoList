import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 
import Title from '../components/Title';
import Footer from '../components/Footer'; 
import List from '../components/List'; 
import Input from '../components/Input'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Title />
          <Input />
        </View>
        <Footer/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)