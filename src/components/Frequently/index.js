import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icons } from '../../assets/index';
import styles from '../Frequently/style'

class CustomButtonWithText extends Component {
  handlePress = () => {
   
  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.handlePress}>
          <View style={styles.iconContainer}>
            <Image style={styles.announcStyle} source={Icons.midIcon} />
          </View>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



export default CustomButtonWithText;