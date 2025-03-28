import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface ProductType {
  id: number;
  name: string;
  price: number;
  rating?: number;
  image: any;
  trending?: boolean;
}

const ProductCard = ({ product }: { product: ProductType }) => {
    return (
      <TouchableOpacity style={productStyles.productItem}>
        {product.trending && (
          <View style={productStyles.trendingBadge}>
            <Text style={productStyles.trendingText}>Trending</Text>
          </View>
        )}
        <Image
          source={product.image as any}
          style={productStyles.productImage}
        />
        <View style={productStyles.productInfo}>
          <Text style={productStyles.productName}>{product.name}</Text>
          <View style={productStyles.priceRatingContainer}>
            <Text style={productStyles.price}>${product.price}</Text>
            {product.rating && (
              <View style={productStyles.rating}>
                <Text style={productStyles.rating}>
                  <Text style={{color: '#FACC15', fontSize: 15}}>★</Text> {product.rating}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  export default ProductCard;


  const productStyles = StyleSheet.create({
    productItem: {
      width: '48%',
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3, // Android shadow
      shadowColor: '#000', // iOS shadow
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    productImage: {
      width: '100%',
      height: 220,
      resizeMode: 'cover',
    },
    productInfo: {
      padding: 10,
    },
    productName: {
      fontSize: 15,
      fontWeight: '600',
      marginBottom: 5,
    },
    priceRatingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    rating: {
      fontSize: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    trendingBadge: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: '#FF4D4D',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 16,
      zIndex: 1,
    },
    trendingText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    }
  });