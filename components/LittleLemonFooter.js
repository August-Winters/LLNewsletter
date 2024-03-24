import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
    style={styles.container}>
      <Text
      style={styles.footerText}>
        All rights reserved by Little Lemon, 2024{''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#164E12',
      marginBottom: 20,
    },
    footerText: {
    padding: 2,
      fontSize: 18,
      color: '#EDEFEE',
      textAlign: 'center',
      fontStyle: 'italic',
    },
  });

