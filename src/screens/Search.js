import { FontAwesome, } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from "react-native";
import { HotelData } from "../components/HotelData";
import HotelMap from "../components/HotelMap";
import { StoreData } from "../components/StoreData";
import StoreMap from './../components/StoreMap';
import { TouristData } from "../components/TouristData";
import TouristMap from "../components/TouristMap";
import { AppContext } from "../context/AppContext";

const Search = () => {
  const [isActiveHotel, setisActiveHotel] = useState(true);
  const [isActiveStores, setIsActiveStores] = useState(false);
  const [isActiveTourist, setIsActiveTourist] = useState(false);
  const [search, setSearch] = useState("");
  const [visibleIcons, setVisibleIcons] = useState(false);

  const [iconsSave, setIconsSave] = useState({});
  const [iconsStoreSave, setIconsStoreSave] = useState({});
  const [iconsTouristSave, setIconsTouristSave] = useState({});

  const {bookmarkedHotels,
    setBookmarkedHotels,
    bookedmarkedSpots,
    setbookedmarkedSpots,
    bookmarkedStores,
    setBookmarkedStores,
  } = useContext(AppContext);

  const searchFilter = (text) => {
    setSearch(text);
  };

  const filteredHotelData = HotelData.filter(item =>
    item.location.toLowerCase().includes(search.toLowerCase()));
  
  const fileterStoreData = StoreData.filter(item =>
    item.location.toLowerCase().includes(search.toLowerCase()));

  const filterTouristData = TouristData.filter(item =>
    item.location.toLowerCase().includes(search.toLowerCase()));


  const handleSave = (item, index) => {
    setIconsSave({ ...iconsSave, [index]: !iconsSave[index] });
    setVisibleIcons(!visibleIcons);
    AsyncStorage.setItem("iconsSave", JSON.stringify(iconsSave));
    if (iconsSave[index] == undefined || iconsSave[index] == false) {
      setBookmarkedHotels((prevBookmarkedHotelsSave) => [
        ...prevBookmarkedHotelsSave,
        item,
      ]);
    } else if (iconsSave[index] == true) {
      setBookmarkedHotels((prevBookmarkedHotelsSave) =>
        prevBookmarkedHotelsSave.filter((hotel) => hotel !== item)
      );
    }
  };

  const handleStoreSave = (item, index) => {
    setIconsStoreSave({ ...iconsStoreSave, [index]: !iconsStoreSave[index] });
    setVisibleIcons(!visibleIcons);
    AsyncStorage.setItem("storeIconSave", JSON.stringify(iconsStoreSave));
    console.log("SOTES=====", iconsStoreSave[index]);
    if (iconsStoreSave[index] == undefined || iconsStoreSave[index] == false) {
      setBookmarkedStores((prevBookmarkedHotelsStoreSave) => [
        ...prevBookmarkedHotelsStoreSave,
        item,
      ]);
    } else if (iconsStoreSave[index] == true) {
      setBookmarkedStores((prevBookmarkedHotelsSave) =>
        prevBookmarkedHotelsSave.filter((hotel) => hotel !== item)
      );
    }
  };

  const handleTouristSave = (item, index) => {
    setIconsTouristSave({
      ...iconsTouristSave,
      [index]: !iconsTouristSave[index],
    });
    setVisibleIcons(!visibleIcons);
    AsyncStorage.setItem("touristIconSave", JSON.stringify(iconsTouristSave));

    if (
      iconsTouristSave[index] == undefined ||
      iconsTouristSave[index] == false
    ) {
      setbookedmarkedSpots((prevBookmarkedHotelsTouristSave) => [
        ...prevBookmarkedHotelsTouristSave,
        item,
      ]);
    } else if (iconsTouristSave[index] == true) {
      setbookedmarkedSpots((prevBookmarkedHotelsSave) =>
        prevBookmarkedHotelsSave.filter((hotel) => hotel !== item)
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <FontAwesome
          style={styles.searchIcon}
          name="search"
          size={24}
          color={"#898686"}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => searchFilter(text)}
          placeholder="Search"
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[
            styles.button,
            isActiveHotel && styles.activeButton,
            { borderRightWidth: 0 },
          ]}
          onPress={() => {
            setisActiveHotel(true);
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
            setisActiveHotel(false);
            setIsActiveTourist(false);
          }}
        >
          <Text>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isActiveTourist && styles.activeButton]}
          onPress={() => {
            setIsActiveTourist(true);
            setisActiveHotel(false);
            setIsActiveStores(false);
          }}
        >
          <Text>Tourist Spots</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <HotelMap isActiveHotel={isActiveHotel} filteredHotelData={filteredHotelData} iconsSave={iconsSave} handleSave={handleSave} />
       </View>
    
      <View>
        <StoreMap isActiveStores={isActiveStores} fileterStoreData={fileterStoreData} iconsStoreSave={iconsStoreSave} handleStoreSave={handleStoreSave}  />
       </View>
   
        <View>
        <TouristMap isActiveTourist={isActiveTourist} filterTouristData={filterTouristData} iconsTouristSave={iconsTouristSave} handleTouristSave={handleTouristSave}  />
       </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: "6%",
    width:'100%'
  },
  searchField: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    marginTop: "2%",
    paddingHorizontal: "2%",
    borderWidth: 2,
    borderColor: "#898686",
  },
  input: {
    width: "90%",
    marginLeft: "2%",
  },
  searchIcon: {
    alignSelf: "center",
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 10,
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

  Icon: {
    alignSelf: "center",
  },
});
export default Search;
