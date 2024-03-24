import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Alert, Image } from 'react-native';


export default function SubscribeScreen() {

  const [email, onChangeEmail] = useState('');
  return (
    <ScrollView style={styles.container}
        indicatorStyle="white">
       <Image
            style={styles.image}
            source={require('../img/little-lemon-logo-grey.png')}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
        />
      <Text style={styles.regularText}>Subscribe to our Newsletter</Text>
        <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'Enter your Email address'}
            keyboardType={'email-address'}
        />
        <Pressable onPress={() => Alert.alert("Thank you for subscribing!")} style={styles.button}>
            <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
    paddingTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginLeft: 100,
    marginRight: 100,
},
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#333333',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#164E12',
    backgroundColor: '#EDEFEE',
    borderRadius: 10,
    borderWidth: 1.5,
  },
  newsletterInputBox: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#164E12',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 25,
  },
});