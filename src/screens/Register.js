import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { emailRegister } from "../redux/actions/authActions";

class Registar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      role: "",
      Twitter: "",
      password: "",
    };
  }

  handleTextChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    this.props.emailRegister(this.state.email, this.state.password);
  };

  render() {
    const { auth } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <View style={styles.addPhotoContainer}>
              <AntDesign name="user" size={60} color="purple" />
              <TouchableOpacity>
                <Text style={styles.addPhotoLink}>ADD USER PHOTO</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
              {auth.error.registerError && (
                <Text style={styles.error}>{auth.error.registerError}</Text>
              )}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  placeholder="Joan Shay"
                  fontSize={15}
                  textAlign="right"
                  value={this.state.fullName}
                  onChangeText={(text) => {
                    this.handleTextChange("fullName", text);
                  }}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  placeholder="joan.shay@sparrow.com"
                  fontSize={15}
                  textAlign="right"
                  keyboardType={"email-address"}
                  value={this.state.email}
                  onChangeText={(text) => {
                    this.handleTextChange("email", text);
                  }}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  placeholder="(+233) 483 9837 22"
                  fontSize={15}
                  textAlign="right"
                  keyboardType={"number-pad"}
                  value={this.state.phone}
                  onChangeText={(text) => {
                    this.handleTextChange("phone", text);
                  }}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Role</Text>
                <TextInput
                  placeholder="Full Stack Developer"
                  fontSize={15}
                  textAlign="right"
                  value={this.state.role}
                  onChangeText={(text) => {
                    this.handleTextChange("role", text);
                  }}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Twitter</Text>
                <TextInput
                  placeholder="@jopanii"
                  fontSize={15}
                  textAlign="right"
                  value={this.state.Twitter}
                  onChangeText={(text) => {
                    this.handleTextChange("twitter", text);
                  }}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  placeholder="*******"
                  fontSize={15}
                  textAlign="right"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) => {
                    this.handleTextChange("password", text);
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.register}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  addPhotoContainer: {
    height: 170,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  addPhotoLink: {
    color: "purple",
    marginVertical: 10,
    fontWeight: "bold",
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  formGroup: {
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 35,
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  register: {
    height: 50,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  error: { color: "red", textAlign: "center" },
});

const mStP = (state) => {
  return {
    auth: state
  };
};

export default connect(mStP, { emailRegister })(Registar);
