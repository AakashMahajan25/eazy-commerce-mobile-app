import { View, Text } from 'react-native'
import React from 'react'
import CartItem from './CartItem'
import Category1 from '@/assets/images/home/category1.png'
import Category2 from '@/assets/images/home/category2.png'
import Category3 from '@/assets/images/home/category3.png'

const CartList = () => {
  return (
    <View>
      <CartItem 
        image={Category1}
        title="Classic White Sneakers"
        variant="Size: 42 | Color: White"
        price={79.99}
        quantity={2}
        onDelete={() => {}}
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
      <CartItem 
        image={Category2}
        title="Running Performance Shoes" 
        variant="Size: 41 | Color: Black/Red"
        price={129.99}
        quantity={1}
        onDelete={() => {}}
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
      <CartItem 
        image={Category3}
        title="Casual Canvas Shoes"
        variant="Size: 43 | Color: Navy Blue"
        price={49.99}
        quantity={3}
        onDelete={() => {}}
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
    </View>
  )
}

export default CartList