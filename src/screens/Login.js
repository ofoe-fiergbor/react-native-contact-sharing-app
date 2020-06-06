import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { emailLogin } from "../redux/actions/authActions";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleTextChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    this.props.emailLogin(this.state.email, this.state.password);
  };

  render() {
    const { auth } = this.props;
    return (
      <ScrollView>
        <View>
          <Image
            source={require("../images/signin.jpg")}
            style={styles.image}
          />
          <View style={{ marginTop: 50, paddingHorizontal: 30 }}>
          {auth.error.loginError && <Text style={{color:'red', textAlign:'center'}}>{auth.error.loginError}</Text>}
            <View style={styles.formCtn}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="joan.shay@sparrow.com"
                fontSize={15}
                textAlign="right"
                keyboardType={"email-address"}
                value={this.state.email}
                onChangeText={(text) => this.handleTextChange("email", text)}
              />
            </View>
            <View style={[styles.formCtn, { marginTop: 20 }]}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="*********"
                secureTextEntry={true}
                textAlign="right"
                value={this.state.password}
                onChangeText={(text) => this.handleTextChange("password", text)}
              />
            </View>
            <TouchableOpacity style={styles.btnCtn} onPress={this.handleSubmit}>
              <Text style={styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 5 }}>
                <Text>Forgot?</Text>
              </View>
              <TouchableOpacity
                style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
              >
                <Text>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 230,
    width: 360,
  },
  formCtn: {
    flexDirection: "row",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  btnCtn: {
    backgroundColor: "purple",
    marginVertical: 25,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
  },
});

const mStP = (state) => {
  return {
    auth: state,
  };
};

export default connect(mStP, { emailLogin })(Login);
