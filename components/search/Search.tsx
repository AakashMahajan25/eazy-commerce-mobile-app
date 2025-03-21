import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import Category1 from '@/assets/images/home/category1.png'
import Category2 from '@/assets/images/home/category2.png'
import Category3 from '@/assets/images/home/category3.png'
import Category4 from '@/assets/images/home/category4.png'
import Category5 from '@/assets/images/home/category5.png'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Price', 'Rating', 'Brand', 'Size'];
  
  const products = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      discount: '25%',
      rating: 4.7,
      reviewCount: 128,
      image: Category1
    },
    {
      id: 2, 
      name: 'Denim Jacket',
      price: 89.99,
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviewCount: 256,
      image: Category2
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      price: 69.99,
      originalPrice: 99.99,
      discount: '30%',
      rating: 4.5,
      reviewCount: 94,
      image: Category3
    },
    {
      id: 4,
      name: 'Summer Dress',
      price: 49.99,
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviewCount: 186,
      image: Category4
    }
  ];

  const renderProductItem = ({ item, index }: any) => (
    <TouchableOpacity style={[styles.productCard, index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 }]}>
      <View style={styles.imageContainer}>
        {item.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{item.discount}</Text>
          </View>
        )}
        <Image 
          source={item.image}
          style={styles.productImage}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>${item.price}</Text>
          {item.originalPrice && (
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
          )}
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
          <Text style={styles.reviewCount}>({item.reviewCount})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with back button and search */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="left" size={20} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <AntDesign name="close" size={18} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {/* Filter tabs */}
      <View style={styles.filtersRow}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScrollContent}
        >
          {filterOptions.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.filterButtonActive
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      {/* Filters and sort section */}
      <View style={styles.sortFilterContainer}>
        <TouchableOpacity style={styles.filtersButton}>
          <Feather name="sliders" size={18} color="#333" />
          <Text style={styles.filtersButtonText}>Filters</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sortButton}>
          <MaterialIcons name="sort" size={20} color="#333" />
          <Text style={styles.sortButtonText}>Sort by: Popular</Text>
        </TouchableOpacity>
      </View>
      
      {/* Product grid */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50, // Added padding to avoid status bar
    height: '100%' // Added height
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  backButton: {
    marginRight: 10,
    padding: 5,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 15,
  },
  filtersRow: {
    marginBottom: 15,
  },
  filtersScrollContent: {
    paddingHorizontal: 15,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
  sortFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filtersButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sortButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  productListContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 170,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  originalPrice: {
    fontSize: 13,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
    fontWeight: '500',
  },
  reviewCount: {
    fontSize: 13,
    color: '#999',
    marginLeft: 4,
  },
});

export default Search;