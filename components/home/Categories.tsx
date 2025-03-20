import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Category1 from '@/assets/images/home/category1.png'
import Category2 from '@/assets/images/home/category2.png'
import Category3 from '@/assets/images/home/category3.png'
import Category4 from '@/assets/images/home/category4.png'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Women',
      image: Category1
    },
    {
      id: 2, 
      name: 'Men',
      image: Category2
    },
    {
      id: 3,
      name: 'Kids',
      image: Category3
    },
    {
      id: 4,
      name: 'Accessories',
      image: Category4
    },
    {
      id: 5,
      name: 'Accessories',
      image: Category4
    }
  ];

  return (
    <View className='bg-white py-3'>
         <Text className='ml-[15px] mb-1 font-semibold text-3xl'>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
           
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <View style={styles.imageContainer}>
                <Image
                  source={category.image as any}
                  style={styles.image}
                />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 35,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  }
});

export default Categories;
