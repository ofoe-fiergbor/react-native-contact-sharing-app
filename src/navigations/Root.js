import React, { Component } from "react";
// import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Feather } from "@expo/vector-icons";

import Landing from "../screens/Landing";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Registar from "../screens/Register";
import MemberProfile from "../screens/MemberProfile";
import MyProfile from "../screens/MyProfile";
import QRCodeScreen from "../screens/QRCodeScreen";
import QRCamScreen from "../screens/QRCamScreen";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Stack = createStackNavigator();

const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export class Root extends Component {
  render() {
    const { auth, logout } = this.props;
    return (
      <View style={styles.container}>
        <NavigationContainer ref={navigationRef}>
          {auth.isLoggedIn ? (
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "purple",
                },
              }}
            >
              <Stack.Screen
                name="qrCode"
                component={QRCodeScreen}
                options={{
                  title: "Codetrain",
                  headerRight: () => (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigate("myProfile");
                        }}
                      >
                        <AntDesign
                          name="user"
                          size={24}
                          color="#fff"
                          style={{ paddingRight: 20 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={logout}>
                        <Feather
                          name="log-out"
                          size={24}
                          color="#fff"
                          style={{ paddingRight: 20 }}
                        />
                      </TouchableOpacity>
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="member"
                component={MemberProfile}
                options={{
                  title: "Member Profile",
                }}
              />
              <Stack.Screen
                name="myProfile"
                component={MyProfile}
                options={{
                  title: "My Profile",
                }}
              />

              <Stack.Screen
                name="qrScan"
                component={QRCamScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "purple",
                },
              }}
            >
              <Stack.Screen
                name="landing"
                component={Landing}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="login"
                component={Login}
                options={{
                  title: "Sign In",
                }}
              />
              <Stack.Screen
                name="registar"
                component={Registar}
                options={{
                  title: "Register",
                }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
const mStP = (state) => {
  return {
    auth: state,
  };
};

export default connect(mStP, { logout })(Root);
