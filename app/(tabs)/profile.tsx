import { ScrollView, Text } from 'react-native'
import React from 'react'
import Details from '@/components/profile/Details'
import Private from '@/components/profile/Private'
import Settings from '@/components/profile/Settings'

const Index = () => {
  return (
    <ScrollView>
      <Details />
      <Private />
      <Settings />
    </ScrollView>
  )
}

export default Index