import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons';

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

        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'purple'
            }

          }}>
          <Stack.Screen name='landing' component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name='welcome' component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='login' component={Login}
            options={{
              title: 'Sign In'
            }}
          />
          <Stack.Screen name='registar' component={Registar} options={{
            title: 'Register',
          }} />
          <Stack.Screen name='member' component={MemberProfile} options={{
            title: 'Member Profile',
          }} />
          <Stack.Screen name='myProfile' component={MyProfile} options={{
            title: 'My Profile',
          }} />
          <Stack.Screen name='qrCode' component={QRCodeScreen} options={{
            title: 'Codetrain',
            headerRight: () => (
              <TouchableOpacity>
                <AntDesign name="user" size={24} color="#fff" style={{paddingRight:20}} />
              </TouchableOpacity>
            )
          }} />
          <Stack.Screen name='qrScan' component={QRCamScreen} options={{ headerShown: false }} />
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
