import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../Activity/style'

export default class Activities extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>PT</Text> 
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Prabhat mentioned you</Text>
          <Text style={styles.messageText}>Hi @ankit, are you here?</Text>
        </View>
        <Text style={styles.timeText}>12:45</Text> 
      </View>
    );
  }
}

