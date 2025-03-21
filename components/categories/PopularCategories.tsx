import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Category1 from '@/assets/images/home/category1.png';
import Category2 from '@/assets/images/home/category2.png';
import Category4 from '@/assets/images/home/category4.png';
import Category5 from '@/assets/images/home/category5.png';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      items: '2.5k items',
      image: Category1
    },
    {
      id: 2,
      name: "Men's Wear", 
      items: '2.1k items',
      image: Category2
    },
    {
      id: 3,
      name: 'Accessories',
      items: '1.8k items', 
      image: Category4
    },
    {
      id: 4,
      name: 'Footwear',
      items: '1.5k items',
      image: Category5
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Categories</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <Image 
              source={category.image as any}
              style={styles.categoryImage}
            />
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.itemCount}>{category.items}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  categoryCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover'
  },
  categoryInfo: {
    padding: 10
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600'
  },
  itemCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  }
});

export default PopularCategories;
