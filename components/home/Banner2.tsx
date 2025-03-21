import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Banner2 = () => {
  return (
    <View className='bg-gray-200'>
        <View className="bg-[#FF4D4D] m-6 px-6 py-6 rounded-xl">
          <Text className="text-white text-3xl font-bold mb-1">Special Offer</Text>
          <Text className="text-white text-xl mb-3">Free shipping on orders over $50</Text>
          <TouchableOpacity className="bg-white self-start px-6 py-2 rounded-xl">
            <Text className="text-black text-lg font-bold">Learn More</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Banner2;
