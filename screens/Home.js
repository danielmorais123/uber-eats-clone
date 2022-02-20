import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem, { restaurants } from "../components/RestaurantItem";

const YELP_API_KEY =
  "EmS6LlF3jrdQ5v0_svg8ty6n-axpqhWqZ2blgIUahkFXnoK4ujR6pK9aPPNd8AMgV1rP77MIVZ_ew99CBuXDGicD6eOjALOxCtZRDl1pZ3TskyRag_CDwXXG3zISYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(restaurants);

  const getRestaurantsFromYelpApi = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Hollywood";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY} `,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelpApi();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
