import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, onPress, Button, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth=Dimensions.get("screen").width
function SignIn({ navigation }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

const [usererror, setUsererror] = useState('')
  console.log(usererror)

  const handleSignIn = () => {
    if (username === '' && password === '') {
      setError('Please enter both username and password');
    } 

    else if (username === '') {
      setUsererror('Please enter username');
    }
    else if (password === '') {
      setError('Please enter Password');
    }
    
    
    else {
    navigation.navigate('Bottom')
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };


  return (
    <View style={styles.main_dev_text}>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.text_heading}>Login</Text>
        <Text style={styles.text_para}>Please sign to continue</Text>
      </View>
      <View style={styles.boxWithShadow}>
        <Icon name="user" size={30} style={{ position: 'absolute', top: 8, left: 5, }} />
        <TextInput
          onChangeText={(text)=>setUsername(text)}
          placeholder="Name"
          style={styles.input} 
          
        />
      
      </View>
      {usererror !== '' && <Text style={{ color: 'red', paddingBottom:10 }}>{usererror}</Text>}
      <View style={styles.boxWithShadow}>
        <Icon name="lock" size={30} style={{ position: 'absolute', top: 8, left: 5, }} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text)=>setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', top: 11, right: 15, }}>
          <Ionicons name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>
      {error !== '' && <Text style={{ color: 'red', paddingBottom:10 }}>{error}</Text>}
      <View style={styles.button}>
       <TouchableOpacity onPress={handleSignIn}>
      <LinearGradient
        colors={['#ffac08', '#ff8228']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius: 10 }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </LinearGradient>
    </TouchableOpacity>
      </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  main_dev_text:{
    flex: 1, 
    justifyContent:'center',
    alignItems:'center'

  },
  text_heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    width:screenWidth*.8
  
  },
  text_para: {
    fontSize: 16,
  },
  boxWithShadow: {
    backgroundColor: '#f2f2ea',
    elevation: 5,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'gray',
    padding: 12,
    borderRadius: 15,
    width: 225,
    paddingLeft: 40,
    width:screenWidth*0.8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 30,
    width:screenWidth*0.8,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 14,
  },
});

export default SignIn;





