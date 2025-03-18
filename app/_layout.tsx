import "../global.css"
import React from 'react'
import { StatusBar } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (<>
  <StatusBar backgroundColor={'white'} />
  <Stack screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="index" options={{
      title: "Aakash Mahajan"
    }} />

    <Stack.Screen name="(tabs)" options={{
      
    }} />
  </Stack>
  </>);
}
