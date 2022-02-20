import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetails/About'
import { Divider } from 'react-native-elements'

const RestaurantDetail = () => {
  return (
    <View>
     <About/>
     <Divider width={1.8} style={{marginVertical:20}} />
    </View>
  )
}

export default RestaurantDetail