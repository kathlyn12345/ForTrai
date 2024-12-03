import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Input = ({ label, iconName, password, onFocus = () => {}, ...props }) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View
        style={[
          styles.input,
          { borderColor: isFocused ? "#000000" : "#CCCCCC" },
        ]}
      >
        <Icon name={iconName} style={styles.icon} />
        <TextInput
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={styles.textinput}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye" : "eye-slash"}
            style={styles.iconeye}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#CCCCCC",
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 18,
    borderWidth: 0.75,
    alignItems: "center",
  },

  icon: {
    fontSize: 24,
    color: "#000000",
  },

  iconeye: {
    fontSize: 20,
    color: "#000000",
  },

  textinput: {
    color: "darkblue",
    flex: 1,
    marginLeft: 10,
  },
});

export default Input;
