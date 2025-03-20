import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductCard from '@/components/home/ProductCard';
import Product1 from '@/assets/images/home/product1.png';
import Product2 from '@/assets/images/home/product2.png';
import Product3 from '@/assets/images/home/product3.png';
import Product4 from '@/assets/images/home/product4.png';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Summer Floral Dress',
      price: 89.99,
      rating: 4.5,
      image: Product1
    },
    {
      id: 2,
      name: 'Classic Denim Jacket',
      price: 129.99, 
      rating: 4.8,
      image: Product2
    },
    {
      id: 3,
      name: 'Leather Crossbody',
      price: 159.99,
      rating: 4.7,
      image: Product3
    },
    {
      id: 4,
      name: 'White Sneakers',
      price: 79.99,
      rating: 4.9,
      image: Product4
    }
  ];

  return (
    <View className='bg-[#808080] py-3'>
      <Text className='ml-[15px] mb-1 font-semibold text-3xl'>Featured Products</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.productsGrid}>
          {products.map((product) => (
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


export default FeaturedProducts;
