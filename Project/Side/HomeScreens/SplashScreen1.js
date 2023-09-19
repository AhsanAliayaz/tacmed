import { View, Text, Image, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import CommonButton from '../../Components/CommonButton/CommonButton'
import SplashScreen from 'react-native-splash-screen'
import Loader from '../Loader/Loader'
import { Overview } from '../../Apis/UserApi'



import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { addBoarding } from '../../Redux/Action/Index'


export default function SplashScreen1({ navigation }) {


    // useEffect(() => {
    //     SplashScreen.hide();
    // }, [])
    
    

    const [isLoading, setIsLoading] = useState(false)
    const [screendata1, setscreendata1] = useState('')

    // console.log('screendata1',screendata1)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            SplashScreen.hide();
            OverviewScreen1()
        });

        return unsubscribe;
    }, [navigation]);

    const OverviewScreen1 = async () => {
        setIsLoading(true)
        await Overview()
            .then(res => {
                console.log("Overview screen 1 Api>>>>><<<<", res)
                setscreendata1(res.screen1)
                setIsLoading(false)

            })
            .catch(err => {
                console.log('Error from all Services Api catch....', err.response.data)
                setIsLoading(false)

            })
    }

    return (
        <View style={Style.RootContainer}>
            <View style={Style.MainViewIamgeSpash}>
                <Image style={{ width: wp(90), height: wp(80), }} source={{uri: screendata1.image}} />
            </View>

            <View style={Style.BrowseNewMedicalParentViewSplash}>

                <Text style={Style.TextBrowseSplash}>{screendata1.title}</Text>


            </View>

            <View style={Style.DetailsCardsplash}>
                <Text numberOfLines={9}style={Style.TextDetailsForgetSplash}>{screendata1.description}</Text>
            </View>


            <View style={Style.Button}>
                <CommonButton onPress={() => navigation.navigate('Splashscreen2')} title={'Next'} />
            </View>
            <Loader visible={isLoading} />
        </View>
    )
}