import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';
import SubscribeScreen from './components/SubscribeScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App( {navigation}) {
  return (
    <>
      <NavigationContainer>
            <View style={styles.container}>
                <LittleLemonHeader/>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({color, size}) => {
                            let iconName;
                            if (route.name === 'Welcome') {
                                iconName = 'home'
                            } else if (route.name === 'Subscribe') {
                                iconName = 'person';
                            } else if (route.name === 'Menu') {
                                iconName = 'menu';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'green',
                        tabBarInactiveTintColor: 'gray'
                    })}
                    initialRouteName="Welcome">
                        <Tab.Screen name="Welcome" component={WelcomeScreen}/>
                        <Tab.Screen name="Menu" component={MenuItems}/>
                        <Tab.Screen name="Subscribe" component={SubscribeScreen}/>
                </Tab.Navigator>
            </View>
            <View style={styles.footerContainer}>
                <LittleLemonFooter/>
            </View>
      </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#EDEFEE',
  },
});