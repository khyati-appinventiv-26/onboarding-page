import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icons } from '../../assets/index';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import from a vector icon library
import styles from '../Notification/style'

export default class Notification extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }
  handlePress = () => {
    this.props.onPress()

  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <View style={styles.iconContainer}>
          <Image style={styles.setting} source={Icons.util} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Complete your account setup</Text>
          <Text style={styles.subtitleText}>Tap to continue</Text>
        </View>
      </TouchableOpacity>
    );
  }
}



