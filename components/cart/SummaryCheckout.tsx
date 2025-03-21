import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SummaryCheckout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>$179.97</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>$5.00</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tax</Text>
        <Text style={styles.value}>$17.99</Text>
      </View>

      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$202.96</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    color: '#666',
  },
  value: {
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 4,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  continueText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  }
})

export default SummaryCheckout
