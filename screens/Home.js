import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, { restaurants } from "../components/home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTab from "../components/home/BottomTab";

const YELP_API_KEY =
  "EmS6LlF3jrdQ5v0_svg8ty6n-axpqhWqZ2blgIUahkFXnoK4ujR6pK9aPPNd8AMgV1rP77MIVZ_ew99CBuXDGicD6eOjALOxCtZRDl1pZ3TskyRag_CDwXXG3zISYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelpApi = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY} `,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelpApi();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
