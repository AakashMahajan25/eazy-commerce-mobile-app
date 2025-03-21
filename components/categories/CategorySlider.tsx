import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Category1 from '@/assets/images/categories/category-slider1.png'
import Category2 from '@/assets/images/categories/category-slider2.png'

const CategorySlider = () => {
  const categories = [
    {
      id: 1,
      name: 'Trending Now',
      image: Category1
    },
    {
      id: 2, 
      name: "Season's Best",
      image: Category2
    }
  ];

  return (
    <View className='bg-white'>
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
              <View style={styles.overlay}>
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
            </View>
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
    marginRight: 15,
  },
  imageContainer: {
    width: 250,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  categoryName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default CategorySlider;
