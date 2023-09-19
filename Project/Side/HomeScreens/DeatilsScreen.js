import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Video from 'react-native-video'
import { useWindowDimensions } from 'react-native';
// import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize,AdEventType } from 'react-native-google-mobile-ads';



export default function DeatilsScreen({ navigation, route }) {

    const { width } = useWindowDimensions();

    const deatils = route?.params?.deatils
    const med = route?.params?.med
    // console.log("Cate????????????????", deatils.file)
    const html = '<div>' + deatils?.content + '</div>';
    const source = {
        html: html
    }

    // const renderersProps = {
      
    //       enableExperimentalPercentWidth: true
        
    //   };

      const adUnitId = TestIds.INTERSTITIAL;

      const Interstitial = InterstitialAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
        
        keywords: ['fashion', 'clothing'],
        
      });

      useEffect(() => {
        const unsubscribe = Interstitial.addAdEventListener(AdEventType.LOADED, () => {
          Interstitial.show();
        });
        Interstitial.load();
    
        // Start loading the rewarded ad straight away
    
        // Unsubscribe from events on unmount
        return unsubscribe;
      }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, }} >
            <View style={Style.RootContainer}>

                <HeaderTop title={deatils.subcategory_name} onPress={() => navigation.goBack()} />

                {/* <View style={Style.MainImageTop}>
                    <Image resizeMode='contain' style={{ width: wp(90), height: wp(60), borderRadius: 10, }} source={{ uri: deatils.subcategory_image }} />
                </View> */}

                <View style={{flex: 1,width: wp(95),alignSelf: 'center'}}>

                    {/* <Text style={Style.TextDetails}>{deatils.subcategory_long_description}</Text> */}

                    <WebView 
                    style={{backgroundColor: '#F5F5F5'}}
                    source={{ uri: deatils?.file}} 
                    androidHardwareAccelerationDisabled={true}
                    allowsFullscreenVideo={true}
                
                    />
                    </View>
                    
                {/* {deatils.subcategory_video ?
                    <View style={Style.VideoView}>

                        <Video
                            resizeMode="contain"
                            source={{ uri: deatils.subcategory_video }}
                            style={{
                                flex: 1,
                                //   borderTopLeftRadius: wp(10),
                                //   borderTopRightRadius: wp(10),
                                width: '100%',
                                height: '100%',
                                borderRadius: 20,
                                overflow: 'hidden',
                                justifyContent: 'center',

                            }}

                            controls={true}
                        />

                    </View>
                    : null
                } */}
            </View>
        </ScrollView>
    )
}


