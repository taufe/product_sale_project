import { AntDesign,Fontisto, Ionicons,MaterialIcons,} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Dimensions,StyleSheet,TouchableOpacity,Alert,Image } from "react-native";
import { AppContext } from "../context/AppContext";

const screenWidth = Dimensions.get('window').width;
const Profile = () => {
  const navigation = useNavigation();
  const { userName } = useContext(AppContext);
  const onCancel = async () => {
    try {
      const response = await new Promise((resolve, reject) => {
        Alert.alert(
          "Alert",
          "Do you want to log out?",
          [
            {
              text: "Yes",
              onPress: () => resolve(true),
            },
            {
              text: "Cancel",
              onPress: () => resolve(false),
            },
          ],
          { cancelable: false }
        );
      });
  
      if (response) {
        navigation.navigate("SignIn");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const myImage = require("../../assets/user.png");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageView}>
        <Image source={myImage} style={{ width: 100, height: 100 }} />
        <Text style={styles.name}>{userName}</Text>
      </TouchableOpacity>
      <View style={{marginTop:100}}>
      <TouchableOpacity style={styles.button}>
        <Fontisto name="prescription" size={24} color="black" />
        <Text style={styles.text}>Personal Details</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="ios-calendar" size={24} color="black" />
        <Text style={styles.text}>Booking</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="setting" size={24} color="black" />
        <Text style={styles.text}>Setting</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button} onPress={onCancel}>
        <MaterialIcons name="logout" size={24} color="black" />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "white",
    paddingTop: 20, 
  },
  name: {
    fontSize: 25,
  marginTop: 10, 
  paddingBottom: 10, 
    
  },
  imageView: {
    alignItems: "center",
    height: "18%",
    paddingTop: "15%",
    width:screenWidth,
  },
  line: {
    width: "100%",
    borderWidth: 0.6,
    borderColor: "grey",
    width:screenWidth,

  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});
export default Profile;
