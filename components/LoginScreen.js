import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Alert, Image } from 'react-native';


export default function LoginScreen() {

  const [email, onChangeEmail] = useState('');
  return (
    <ScrollView style={styles.container}
        indicatorStyle="white">
       <Image
       />
      <Text style={styles.regularText}>Subscribe to our Newsletter</Text>
        <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
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
    backgroundColor: '#333333'
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
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
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
    backgroundColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});