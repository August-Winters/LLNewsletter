import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonHeader() {
     return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Little Lemon
            </Text>
        </View>);
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#164E12',
        },

        headerText: {
          paddingTop: 50,
          paddingBottom: 30,
          paddingLeft: 40,
          paddingRight: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        },
      });