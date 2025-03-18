import "../global.css"
import React from 'react'
import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/Header";

export default function RootLayout() {
  return (<>
  <StatusBar backgroundColor={'white'} />
  <Stack screenOptions={{
    header: () => <Header />
  }}>
    <Stack.Screen name="index" options={{
      title: "Aakash Mahajan"
    }} />

    <Stack.Screen name="(tabs)" options={{
      
    }} />
  </Stack>
  </>);
}
