import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image, Pressable, ScrollView} from "react-native";
import {SimpleLineIcons,Feather, Ionicons } from "@expo/vector-icons";
import React from 'react'

const TouristMap = ({isActiveTourist,filterTouristData,handleTouristSave,iconsTouristSave}) => {
  return (
    <View>
      {isActiveTourist && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filterTouristData.map((item, index) => {
            return (
              <View style={styles.hotelCardView} key={index}>
                <View style={{ flexDirection: "row", width: "90%" }}>
                  <View>
                    <Image
                      resizeMode="cover"
                      style={styles.hotelImage}
                      source={item.image}
                    />
                  </View>
                  <View style={styles.cardLeftView}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      {item.spotName}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <SimpleLineIcons name="location-pin" size={24} color="black" />
                      <Text>{item.location}</Text>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={styles.Icon}
                  onPress={() => {
                    handleTouristSave(item, index);
                  }}
                >
                  {iconsTouristSave[index] ? (
                    <Ionicons name="bookmark" size={34} color="red" />
                  ) : (
                    <Feather name="bookmark" size={34} color="black" />
                  )}
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    hotelCardView: {
      marginTop: 10,
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
        width:'100%',
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
      backgroundColor: "white",
      borderRadius: 10,
    },
    hotelImage: {
      height: 100,
      width: 100,
      borderRadius: 10,
    },
    cardLeftView: {
      marginLeft: 10,
      justifyContent: "space-evenly",
    },
    Icon: {
      alignSelf: "center",
    },
  });

export default TouristMap