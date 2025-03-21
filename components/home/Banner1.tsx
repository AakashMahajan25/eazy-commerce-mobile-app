import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'
import Banner1Img from '@/assets/images/home/banner1.png'
const Banner1 = () => {
  return (
    <View>
      {/* <Text>Hello Word</Text> */}
      <Image source={Banner1Img} className='w-full h-44' />
    </View>
  )
}

export default Banner1