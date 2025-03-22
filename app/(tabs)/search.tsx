import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Search from '@/components/search/Search'
import FeaturedProducts from '@/components/home/FeaturedProducts'

const Index = () => {
  return (
    <ScrollView>
      <Search />
      <FeaturedProducts />
    </ScrollView>
  )
}

export default Index