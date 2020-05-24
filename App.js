import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from './src/screens/Landing';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Login from './src/screens/Login';
import Registar from './src/screens/Register';
import MemberProfile from './src/screens/MemberProfile';
import MyProfile from './src/screens/MyProfile';
import QRCodeScreen from './src/screens/QRCodeScreen';
import QRCamScreen from './src/screens/QRCamScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name='landing' component={Landing} />
          <Stack.Screen name='welcome' component={WelcomeScreen} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='registar' component={Registar} />
          <Stack.Screen name='member' component={MemberProfile} />
          <Stack.Screen name='myProfile' component={MyProfile} />
          <Stack.Screen name='qrCode' component={QRCodeScreen} />
          <Stack.Screen name='qrScan' component={QRCamScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
