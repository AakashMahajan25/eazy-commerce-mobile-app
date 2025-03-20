import React from 'react' 
import { View, ScrollView } from 'react-native'
// import Banner1 from '@/components/home/Banner1'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'

const Index = () => {
  return (
    <ScrollView>
      {/* <Banner1 /> */}
      <Categories />
      <FeaturedProducts />
    </ScrollView>
  )
}

export default Index