import React from 'react' 
import { View, ScrollView } from 'react-native'
// import Banner1 from '@/components/home/Banner1'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrendingNow from '@/components/home/TrendingNow'
import Banner2 from '@/components/home/Banner2'

const Index = () => {
  return (
    <ScrollView>
      {/* <Banner1 /> */}
      <Categories />
      <FeaturedProducts />
      <TrendingNow />
      <Banner2 />
    </ScrollView>
  )
}

export default Index