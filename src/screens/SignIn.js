import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from "../context/AppContext";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width
const SignIn = () => {
  const navigation = useNavigation();
  const { userName, setUserName } = useContext(AppContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emptyField, setEmptyField] = useState("");
 
 const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onClick = () => {
    if (name === "" || password === "") {
      setEmptyField("Please fill in all fields");
    }
       else {
      setPassword("");
      setName("");
      navigation.navigate("BottomTabNavigator");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: "10%", marginBottom: "15%" }}>
        <Text style={styles.Header}>Login</Text>
        <Text>Please sign in to continue</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputField}>
          <Feather name="user" size={20} style={styles.input_icon}  />
         <TextInput
            onChangeText={(text) => {
              setUserName(text);
              setName(text);
            }}
            value={name}
            style={styles.input}
            placeholder="Name"
          />
        </View>
         <View style={styles.inputField}>
         <Feather name="lock" size={20} style={styles.input_icon}  />
                <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!showPassword}
        placeholder="Password"
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} style={styles.eye_slash} />
      </TouchableOpacity>
    </View>
        <View><Text style={styles.useremptyMessage}>{emptyField}</Text></View>
        <LinearGradient
          colors={["#FFB900", "#FF7730"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={onClick}
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text>Sign in</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  Header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputField: {
    width: screenWidth * 0.8,
    borderRadius: 15,
    flexDirection: "row",
    borderColor: "black",
    marginBottom: "3%",
    backgroundColor: "#f2f2ea",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
     elevation: 5,
  },
  input_icon: {
    height: 20,
    width: 20,
    marginRight: "4%",
    marginLeft: "2%",
    alignSelf: "center",
  },
  input: {
    width: "75%",
  },
  button: {
    paddingVertical: "3.5%",
    borderRadius: 15,
    width: screenWidth * 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  eye_slash:{
    marginLeft: "62%",
    alignSelf: "center",
    marginTop:13, 
  },
  useremptyMessage:{
    color:'red',
    paddingBottom:10
  }
});
export default SignIn;
    
