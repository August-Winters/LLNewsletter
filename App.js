import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
    <View 
        style={{
            flex: 1,
            backgroundColor: '#495E57'
        }}>
        <LittleLemonHeader/>
        <WelcomeScreen/>
    </View>
    <View
        style={{
            backgroundColor: '#495E57',
        }}>
        <LittleLemonFooter/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
