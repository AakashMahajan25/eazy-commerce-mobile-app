import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AllCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      icon: 'laptop-outline'
    },
    {
      id: 2,
      name: 'Home & Living',
      icon: 'home-outline'  
    },
    {
      id: 3,
      name: 'Fashion',
      icon: 'shirt-outline'
    },
    {
      id: 4,
      name: 'Sports & Outdoor',
      icon: 'football-outline'
    },
    {
      id: 5,
      name: 'Books',
      icon: 'book-outline'
    },
    {
      id: 6,
      name: 'Health & Wellness',
      icon: 'fitness-outline'
    }
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>All Categories</Text>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.categoryItem}>
          <Ionicons name={category.icon as any} size={24} color="#666" />
          <Text style={styles.categoryName}>{category.name}</Text>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  categoryName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: '#333'
  }
});

export default AllCategories;
