import { View, Text, } from 'react-native'
import React, { Fragment } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import SignUp from '../Side/AuthScreens/SignUp';
import ForgotPassword from '../Side/AuthScreens/ForgotPassword';
import Otp from '../Side/AuthScreens/Otp';
import NewPassword from '../Side/AuthScreens/NewPassword';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SignIn from '../Side/AuthScreens/SignIn';
import BottomTab from './BottomTab';
import Categories from '../Side/HomeScreens/Categories';
import Subcategories from '../Side/HomeScreens/Subcategories';
import MedicalCollection from '../Side/HomeScreens/MedicalCollection';
import DeatilsScreen from '../Side/HomeScreens/DeatilsScreen';
import ContactUs from '../Side/HomeScreens/ContactUs';
import UpdatePassword from '../Side/HomeScreens/ProfileScreens/UpdatePassword';
import SplashScreen1 from '../Side/HomeScreens/SplashScreen1';
import Splashscreen2 from '../Side/HomeScreens/Splashscreen2';
import Splashscreen3 from '../Side/HomeScreens/Splashscreen3';
import DeatilsMedical from '../Side/HomeScreens/Deatils_medical';
import { useSelector } from 'react-redux';
import TermandC from '../Side/AuthScreens/TermandC';
import PrivacyPolicy from '../Side/AuthScreens/PrivacyPolicy';






const Stack = createStackNavigator();

export default function StackNav() {

    const { isLoggedIn, userData } = useSelector(state => state?.USER)

    const onBoardingStatus = useSelector(state => state?.BoardingReducer?.isLoggedFirstTime)
    // console.log('OnBoardingStatus????????????????????<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>', onBoardingStatus)

    // console.log('isloggedin main Stack=======', userData)

    return (
        <NavigationContainer>
            
            <Stack.Navigator>


                {!userData ?
                    (



                        <Fragment>

                            {!onBoardingStatus ?

                                <Fragment>

                                    <Stack.Screen name="SplashScreen1" component={SplashScreen1}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="Splashscreen2" component={Splashscreen2}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="Splashscreen3" component={Splashscreen3}
                                        options={{ headerShown: false }}
                                    />

                                    <Stack.Screen name="TermandC" component={TermandC}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
                                        options={{ headerShown: false }}
                                    />

                                </Fragment>
                                :
                                <Fragment>
                                    <Stack.Screen name="SignIn" component={SignIn}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="SignUp" component={SignUp}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="ForgotPassword" component={ForgotPassword}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="Otp" component={Otp}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="NewPassword" component={NewPassword}
                                        options={{ headerShown: false }}
                                    />
                                </Fragment>
                            }
                        </Fragment>
                    )
                    :

                    (
                      
                            
                                <Fragment>
                                    <Stack.Screen name="BottomTab" component={BottomTab}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="Categories" component={Categories}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="Subcategories" component={Subcategories}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="MedicalCollection" component={MedicalCollection}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="DeatilsScreen" component={DeatilsScreen}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="ContactUs" component={ContactUs}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="UpdatePassword" component={UpdatePassword}
                                        options={{ headerShown: false }}
                                    />
                                    <Stack.Screen name="DeatilsMedical" component={DeatilsMedical}
                                        options={{ headerShown: false }}
                                    />
                                </Fragment>
                          






                        
                    )

                }





            </Stack.Navigator>
        </NavigationContainer>
    )
}