import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CartList from '@/components/cart/CartList'
import PromoCode from '@/components/cart/PromoCode'
import SummaryCheckout from '@/components/cart/SummaryCheckout'

const cart = () => {
  return (
    <ScrollView>
      <CartList />
      <PromoCode />
      <SummaryCheckout />
    </ScrollView>
  )
}

export default cart