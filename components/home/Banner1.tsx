import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import banner1 from "@/assets/images/home/banner1.png";

const blurhash =
  "|ZGbbbx]WFRjWCxuxtxukC~pxuRkkCayWBaya|ofIUt7WBt7oeRkNGM{juIUoeoLWCazayaxWBRjRjoeofRjWBbHofs:f6oJWBa#ayj[ofofj[j[s.RjR%jsj[ofj[a#azoJWBWBa}j[j@ayj]j[ofj[j[kCaxayf6j[kC";

const Banner1 = () => {
  return (
    <View style={styles.container}>
      <Image
        // className="h-96 w-5"
        style={styles.image}
        source={banner1}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
};

export default Banner1;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      backgroundColor: '#0553',
    },
  });
