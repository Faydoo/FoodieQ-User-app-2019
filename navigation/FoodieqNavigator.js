import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import VendorsScreen from '../screens/VendorsScreen';
import VendorDetailsScreen from '../screens/VendorDetailScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import BookingScreen from '../screens/BookingScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyReservationsScreen from '../screens/MyReservationsScreen';
import Colors from '../constants/colors';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.purple,
        height: 65
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Colors.white
};

const FoodieqNavigator = createStackNavigator({
    Vendors: {
        screen: VendorsScreen, 
        navigationOptions: {
            headerTitle: 'Zoek en kies een deelnemer'
        }
    },
    VendorDetails: {
        screen: VendorDetailsScreen,
        navigationOptions: {
            headerTitle: 'Deelnemer'
        }
    }, 
    Questions: {
        screen: QuestionsScreen
    },
    Booking: {
        screen: BookingScreen,
        navigationOptions: {
            headerTitle: 'Vul uw gegevens in'
        }
    }
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const ProfileNav = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: 'Account Instellingen'
        }
    }
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const MapNav = createStackNavigator({
    MapScreen: {
        screen: MapScreen,
        navigationOptions: {
            headerTitle: 'Zoek naar deelnemers'
        }
    }
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const ReservationsNav = createStackNavigator({
    MyReservationsScreen: {
        screen: MyReservationsScreen,
        navigationOptions: {
            headerTitle: 'Mijn reserveringen'
        }
    }
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const tabScreenConfig = {
    Vendor: {
        screen: FoodieqNavigator,
        navigationOptions: {
            tabBarLabel: 'Deelnemers',
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor} />;
            }
        }
    },
    Map: {
        screen: MapNav,
        navigationOptions: {
            tabBarLabel: 'Plattegrond',
            tabBarIcon: (tabInfo) => {
                return <FontAwesome5 name="map-marker-alt" size={25} color={tabInfo.tintColor} />;
            }
        }
    },
    MyReservations: {
        screen: ReservationsNav,
        navigationOptions: {
            tabBarLabel: 'Reserveringen',
            tabBarIcon: (tabInfo) => {
                return <Entypo name="time-slot" size={25} color={tabInfo.tintColor} />;
            }
        }
    },
    Profile: {
        screen: ProfileNav,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: (tabInfo) => {
                return <FontAwesome name="user-circle-o" size={25} color={tabInfo.tintColor} />;
            }
        }
    }
};

const FoodieqTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        inactiveTintColor: Colors.white,
        activeTintColor: Colors.white,
        barStyle: {
            backgroundColor: Colors.purple
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            showLabel: false,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.purple,
            inactiveTintColor: Colors.primary
        } 
    }
);

export default createAppContainer(FoodieqTabNavigator);