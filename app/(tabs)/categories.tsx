import { ScrollView } from 'react-native'
import React from 'react'
import CategorySlider from '@/components/categories/CategorySlider'
import PopularCategories from '@/components/categories/PopularCategories'
import AllCategories from '@/components/categories/AllCategories'

const Index = () => {
  return (
    <ScrollView>
      <CategorySlider />
      <PopularCategories />
      <AllCategories />
    </ScrollView>
  )
}

export default Index