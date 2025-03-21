import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductCard from './ProductCard';
import Trending1 from '@/assets/images/home/trending1.png'
import Trending2 from '@/assets/images/home/trending2.png'

const TrendingNow = () => {
  const trendingProducts = [
    {
      id: 1,
      name: 'Oversized Sweater',
      price: 69.99,
      image: Trending1,
      trending: true
    },
    {
      id: 2,
      name: 'Pleated Skirt',
      price: 49.99,
      image: Trending2,
      trending: true
    }
  ];

  return (
    <View className='bg-white py-3'>
      <Text className='ml-[15px] mb-1 font-semibold text-3xl'>Trending Now</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.productsGrid}>
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});

export default TrendingNow;
