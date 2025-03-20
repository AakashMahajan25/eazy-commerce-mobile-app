import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import useHeaderTitle from '@/hooks/useHeaderTitle'

const Header = () => {

  return (
    <View className='bg-white h-20 px-5 flex flex-row justify-between items-center'>
      <View></View>
        <View>
            <Text className='font-bold text-2xl'>{useHeaderTitle()}</Text>
        </View>
      <View className='flex flex-row gap-5'>
        <Link href={'/search'}><Ionicons name='search-outline' size={36} /></Link>
        <Link href={'/cart'}>
            <Ionicons name='cart-outline' size={36} />
        </Link>
      </View>
    </View>
  )
}

export default Header