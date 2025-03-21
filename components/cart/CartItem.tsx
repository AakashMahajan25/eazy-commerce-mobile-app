import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface CartItemProps {
  image: any;
  title: string;
  variant: string;
  price: number;
  quantity: number;
  onDelete: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CartItem = ({
  image,
  title,
  variant,
  price,
  quantity,
  onDelete,
  onIncrement,
  onDecrement
}: CartItemProps) => {
  return (
    <View style={styles.container}>
      <Image 
        source={image}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
        <Text style={styles.variant}>{variant}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={onDecrement}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={onIncrement}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    flex: 1,
    marginRight: 8,
  },
  variant: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 12,
  },
});

export default CartItem