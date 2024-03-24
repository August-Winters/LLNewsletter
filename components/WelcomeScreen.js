import * as React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, View, Image, useColorScheme, Pressable } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function WelcomeScreen( {navigation}) {

    const colorScheme = useColorScheme();
    const Tab = createBottomTabNavigator();

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
            source={require('../img/little-lemon-logo.png')}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
        />
    </View>
      <Text
        style={[
            styles.regularText
        ]}>
        Little Lemon - your local Mediterranean Bistro.
      </Text>
      <Text
        style={[
            styles.regularText,
            colorScheme === 'light'
            ? { backgroundColor: '#EDEFEE'}
            : { backgroundColor: '#333333'}
        ]}>
        Subscribe to our newsletter for recipes, coupons, and more!
      </Text>
        <Pressable onPress={() => navigation.navigate('Subscribe')}
            style={styles.button}>
            <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button}>
                <Text style={styles.buttonText}>View Menu</Text>
        </Pressable>
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
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },

    regularText: {
        fontSize: 24,
        padding: 10,
        marginVertical: 8,
        color: '#333333',
        textAlign: 'center',
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },

    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        marginBottom: 15,
        backgroundColor: '#164E12',
        borderWidth: 2,
        borderRadius: 50,
      },

      buttonText: {
        color: '#EDEFEE',
        textAlign: 'center',
        fontSize: 24,
      },
  });