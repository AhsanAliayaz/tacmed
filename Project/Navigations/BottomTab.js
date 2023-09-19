import { Image, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Side/HomeScreens/Home';
import Profile from '../Side/HomeScreens/ProfileScreens/Profile';
import Style from '../Constants/Style'
import { Colors } from '../Constants/Colors';
import BodyInteraction from '../Side/HomeScreens/BodyInteraction';
import Ionions from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export default function BottomTab({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: wp(16),
                    width: wp(80),
                    borderRadius: 100,
                    bottom: 5,
                    // alignSelf: 'center',
                    left: wp(10),
                    position: 'absolute',
                },

                // tabBarBackground: () => (

                // ),
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return (
                            <View style={{ marginTop: 14, alignItems: 'center' }}>
                                {focused ? (
                                    <Foundation
                                        name="home"
                                        size={28}
                                        style={{ color: Colors.neutral551 }}
                                    />
                                ) : (
                                    <Octicons
                                        name="home"
                                        size={25}
                                        style={{
                                            color: Colors.neutral551,
                                        }}
                                    />
                                )}
                            </View>
                        );
                    }
                    // if (route.name === 'History') {
                    //     return (
                    //         <View
                    //             style={{
                    //                 marginTop: 14,
                    //                 alignItems: 'center',
                    //                 backgroundColor: focused ? '#4C94CC' : 'trensparent',
                    //                 borderWidth: 1,
                    //                 borderColor: focused ? '#4C94CC' : '#4C94CC',
                    //                 borderRadius: 100,
                    //                 width: 30,
                    //                 height: 30,
                    //                 justifyContent: 'center',
                    //             }}>
                    //             <MaterialCommunityIcons
                    //                 name={'history'}
                    //                 size={25}
                    //                 style={{
                    //                     color: focused ? '#fff' : '#4C94CC',
                    //                 }}
                    //             />
                    //         </View>
                    //     );
                    // }

                    if (route.name === 'BodyInteraction') {
                        return (
                            <View style={{ marginTop: 14, alignItems: 'center' }}>
                                <Ionions
                                    name={focused ? 'body' :  'body-outline'}
                                    size={25}
                                    style={{
                                        color: focused ? Colors.neutral551 : Colors.neutral551,          
                                     }}
                                />
                            </View>
                        );
                    }
 
                    if (route.name === 'Profile') {
                        return (
                            <View style={{ marginTop: 14, alignItems: 'center' }}>
                                <FontAwesome
                                    name={focused ? 'user-circle-o' :  'user-circle'}
                                    size={25}
                                    style={{
                                        color: focused ? Colors.neutral551 : Colors.neutral551,          
                                     }}
                                />
                            </View>
                        );
                    }
                   


                },
            })}>
            <Tab.Screen name="Home"component={Home} options={{ tabBarLabel: '',}} />

            <Tab.Screen name="BodyInteraction" component={BodyInteraction} options={{ tabBarLabel: '', }}/>

            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: '', }}/>

            

      
        </Tab.Navigator>
    );
}