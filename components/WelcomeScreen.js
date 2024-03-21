import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, TextInput, View, Image, useColorScheme } from 'react-native';

export default function WelcomeScreen() {
   
    const colorScheme = useColorScheme();
  return (
    <ScrollView
    indicatorStyle="white"
    style={[
        styles.container,
        colorScheme === 'light'
            ? { backgroundColor: '#EDEFEE'}
            : { backgroundColor: '#333333'}
    ]}>
    <View style={styles.headerWrapper}>
        <Image
            style={styles.image}
            source={require('../img/logo.png')}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
        />
        <Text
            style={[
                styles.headerText,
                colorScheme === 'light'
                ? { backgroundColor: '#333333'}
                : { backgroundColor: '#EDEFEE'},
            ]}>
            Little Lemon
        </Text>
    </View>
      <Text
        style={[
            styles.regularText,
            colorScheme === 'light'
            ? { backgroundColor: '#333333'}
            : { backgroundColor: '#EDEFEE'}
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },

    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },

    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
  });