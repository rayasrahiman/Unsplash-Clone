import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function ScrollMenuComp() {
  return (
    <View style={styles.container}>
      <Text style={styles.focussedText}>Editorial</Text>
      <Text style={styles.nonFocussedText}>Wallpapers</Text>
      <Text style={styles.nonFocussedText}>3D Renders</Text>
      <Text style={styles.nonFocussedText}>Travel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  focussedText: {
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 0.7,
  },
  nonFocussedText: {
    color: '#7e7e7e',
    letterSpacing: 0.7,
  },
});
