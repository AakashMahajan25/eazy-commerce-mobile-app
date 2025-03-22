import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Private = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Shipping Addresses Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shipping Addresses</Text>
          <TouchableOpacity>
            <Ionicons name="add" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addressCard}>
          <Text style={styles.addressType}>Home</Text>
          <Text style={styles.addressText}>123 Main Street, Apt 4B</Text>
          <Text style={styles.addressText}>New York, NY 10001</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Methods Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <TouchableOpacity>
            <Ionicons name="add" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.paymentCards}>
          <TouchableOpacity style={styles.paymentCard}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardType}>VISA •••• 4589</Text>
              <Text style={styles.cardExpiry}>09/24</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentCard}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardType}>MO •••• 7832</Text>
              <Text style={styles.cardExpiry}>11/25</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Orders Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Orders</Text>
        <View style={styles.ordersList}>
          <TouchableOpacity style={styles.orderItem}>
            <View>
              <Text style={styles.orderNumber}>#ORD-2024-008</Text>
              <Text style={styles.orderDate}>Jan 15, 2024</Text>
            </View>
            <View style={styles.orderRight}>
              <Text style={styles.orderAmount}>$156.00</Text>
              <Text style={styles.orderStatus}>Delivered</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderItem}>
            <View>
              <Text style={styles.orderNumber}>#ORD-2024-007</Text>
              <Text style={styles.orderDate}>Jan 12, 2024</Text>
            </View>
            <View style={styles.orderRight}>
              <Text style={styles.orderAmount}>$89.99</Text>
              <Text style={styles.orderStatus}>In Transit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderItem}>
            <View>
              <Text style={styles.orderNumber}>#ORD-2024-006</Text>
              <Text style={styles.orderDate}>Jan 08, 2024</Text>
            </View>
            <View style={styles.orderRight}>
              <Text style={styles.orderAmount}>$234.50</Text>
              <Text style={styles.orderStatus}>Delivered</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
    minHeight: '100%',
    paddingBottom: 32 // Add extra padding at bottom for better scrolling
  },
  section: {
    marginBottom: 24
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000'
  },
  addressCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8
  },
  addressType: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4
  },
  paymentCards: {
    gap: 12
  },
  paymentCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardType: {
    fontSize: 16,
    fontWeight: '500'
  },
  cardExpiry: {
    fontSize: 14,
    color: '#666'
  },
  ordersList: {
    gap: 12
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4
  },
  orderDate: {
    fontSize: 14,
    color: '#666'
  },
  orderRight: {
    alignItems: 'flex-end'
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4
  },
  orderStatus: {
    fontSize: 14,
    color: '#666'
  }
})

export default Private
