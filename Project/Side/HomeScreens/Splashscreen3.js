import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import CommonButton from '../../Components/CommonButton/CommonButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Overview } from '../../Apis/UserApi'
import Loader from '../Loader/Loader'


export default function Splashscreen3({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [screendata3, setscreendata3] = useState('')

  // console.log('screendata3', screendata3)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      OverviewScreen3()

    });

    return unsubscribe;
  }, [navigation]);

  const OverviewScreen3 = async () => {
    setIsLoading(true)
    await Overview()
      .then(res => {
        console.log("Overview screen 2 Api>>>>><<<<", res)
        setscreendata3(res.screen3)
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
        <Image style={{ width: wp(90), height: wp(80), }} source={{uri:screendata3.image }} />
      </View>

      <View style={Style.BrowseNewMedicalParentViewSplash}>

        <Text style={Style.TextBrowseSplash}>{screendata3.title}</Text>

      </View>

      <View style={Style.DetailsCardsplash}>
        <Text numberOfLines={9} style={Style.TextDetailsForgetSplash}>{screendata3.description}</Text>
      </View>


      <View style={Style.Button}>
        <CommonButton onPress={() => navigation.navigate('TermandC')} title={'Next'} />
      </View>
      <Loader visible={isLoading} />
    </View>
  )
}