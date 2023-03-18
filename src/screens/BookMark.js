import {SimpleLineIcons} from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { View, Text,TouchableOpacity,StyleSheet,Image,ScrollView } from "react-native";
import { AppContext } from "../context/AppContext";

const BookMark = () => {
  const { bookmarkedHotels, bookedmarkedSpots, bookmarkedStores } =
    useContext(AppContext);
  const [isActive, setIsActive] = useState(true);
  const [isActiveStores, setIsActiveStores] = useState(false);
  const [isActiveTourist, setIsActiveTourist] = useState(false);

  return (
    <>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[
            styles.button,
            isActive && styles.activeButton,
          ]}
          onPress={() => {
            setIsActive(true);
            setIsActiveStores(false);
            setIsActiveTourist(false);
          }}
        >
          <Text>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isActiveStores && styles.activeButton]}
          onPress={() => {
            setIsActiveStores(true);
            setIsActive(false);
            setIsActiveTourist(false);
          }}
        >
          <Text>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isActiveTourist && styles.activeButton]}
          onPress={() => {
            setIsActiveTourist(true);
            setIsActive(false);
            setIsActiveStores(false);
          }}
        >
          <Text>Tourist Spots</Text>
        </TouchableOpacity>
      </View>
      {isActive && (
        <>
          {bookmarkedHotels.length === 0 ? (
            <View style={styles.dataNotFound}>
              <Text>No Bookmarked hotels</Text>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {bookmarkedHotels.map((item, index) => {
                return (
                  <View style={styles.hotelCardView} key={index}>
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
                        {item.hotelName}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                      <SimpleLineIcons name="location-pin" size={24} color="black" />
                        <Text>{item.location}</Text>
                      </View>
                      <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </>
      )}
      {isActiveStores && (
        <>
          {bookmarkedStores.length === 0 ? (
            <View style={styles.dataNotFound}>
              <Text>No Bookmarked Stores</Text>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {bookmarkedStores.map((item, index) => {
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
                          {item.storeName}
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                        <SimpleLineIcons name="location-pin" size={24} color="black" />
                          <Text>{item.location}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </>
      )}
      {isActiveTourist && (
        <>
          {bookedmarkedSpots.length === 0 ? (
            <View style={styles.dataNotFound}>
              <Text>No Bookmarked Spots</Text>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {bookedmarkedSpots.map((item, index) => {
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
                  </View>
                );
              })}
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    marginTop: 25,
  },
  button: {
    width: "33%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "grey",
  },
  activeButton: {
    backgroundColor: "#FF7730",
  },
  hotelCardView: {
    marginTop: 10,
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
  dataNotFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BookMark;


