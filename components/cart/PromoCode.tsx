import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const PromoCode = () => {
  const [promoCode, setPromoCode] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter promo code"
        value={promoCode}
        onChangeText={setPromoCode}
      />
      <TouchableOpacity 
        style={styles.applyButton}
        onPress={() => {
          // Handle promo code application
        }}
      >
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  applyButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  }
})

export default PromoCode
