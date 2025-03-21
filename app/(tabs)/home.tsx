import React from 'react' 
import { View, ScrollView } from 'react-native'
// import Banner1 from '@/components/home/Banner1'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrendingNow from '@/components/home/TrendingNow'

const Index = () => {
  return (
    <ScrollView>
      {/* <Banner1 /> */}
      <Categories />
      <FeaturedProducts />
      <TrendingNow />
    </ScrollView>
  )
}

export default Index