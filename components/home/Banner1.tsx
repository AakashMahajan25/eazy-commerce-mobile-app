import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Image } from 'expo-image'
// import Banner1 from '@/assets/images/home/Banner1.png'

const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Banner1 = () => {
    return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source="/home/test.png"
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0553',
    },
});

export default Banner1