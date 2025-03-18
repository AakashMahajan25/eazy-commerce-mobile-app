import { FontAwesome, MaterialIcons  } from '@expo/vector-icons'
import { Tabs } from "expo-router";

export default function RootLayout() {
    return <Tabs screenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen
            name="index"
            options={{
                href: null
            }}
        />
        <Tabs.Screen
            name="home"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />
            }}
        />
        <Tabs.Screen
            name="categories"
            options={{
                title: 'Categories',
                tabBarIcon: ({color}) => <MaterialIcons size={28} name='grid-view' color={color} />
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                tabBarIcon: ({color}) => <MaterialIcons size={28} name='search' color={color} />
            }}
        />
        <Tabs.Screen
            name="cart"
            options={{
                title: 'Cart',
                tabBarIcon: ({color}) => <MaterialIcons size={28} name='shopping-cart' color={color} />
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({color}) => <FontAwesome size={28} name='user' color={color} />
            }}
        />
    </Tabs>;
  }
  