import { usePathname } from 'expo-router'

const useHeaderTitle = () => {
    const pathname = usePathname();

    switch(pathname) {
        case '/home':
            return 'Home'
        case '/categories':
            return 'Categories'
        case '/search':
            return 'Search'
        case '/cart':
            return 'Cart'
        case '/profile':
            return 'Profile'
    }
}

export default useHeaderTitle;

