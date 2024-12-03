import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../components/input";
import Button from "../components/button";

const SignupScreen = () => {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const validate = () => {
    console.log("validate!");
    console.log(inputs);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.textTitle}>Sign Up Form</Text>
        <Input
          label="Email"
          iconName="envelope"
          placeholder="Enter your email"
          onChangedText={(text) => handleOnChange(text, "email")}
        />
        <Input
          label="Password"
          iconName="lock"
          password
          placeholder="Enter your password"
          onChangedText={(text) => handleOnChange(text, "password")}
        />
        <Input
          label="Confirm Password"
          iconName="lock"
          password
          placeholder="Enter your password"
          onChangedText={(text) => handleOnChange(text, "passwordConfirm")}
        />

        <Button title="Sign Up" onPress={validate} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },

  scrollContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  textTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default SignupScreen;
