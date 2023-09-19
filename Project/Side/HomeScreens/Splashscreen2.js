import { View, Text, Image, FlatList, } from 'react-native'
import React,{useEffect,useState} from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import CommonButton from '../../Components/CommonButton/CommonButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Loader from '../Loader/Loader'
import { Overview } from '../../Apis/UserApi'

export default function Splashscreen2({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [screendata2, setscreendata2] = useState('')

  // console.log('screendata2', screendata2)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      OverviewScreen2()

    });

    return unsubscribe;
  }, [navigation]);

  const OverviewScreen2 = async () => {
    setIsLoading(true)
    await Overview()
      .then(res => {
        console.log("Overview screen 2 Api>>>>><<<<", res)
        setscreendata2(res.screen2)
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
        <Image style={{ width: wp(90), height: wp(80), }} source={{uri:screendata2.image}} />
      </View>

      <View style={Style.BrowseNewMedicalParentViewSplash}>

        <Text style={Style.TextBrowseSplash}>{screendata2.title}</Text>

      </View>

      <View style={Style.DetailsCardsplash}>
        <Text numberOfLines={9} style={Style.TextDetailsForgetSplash}>{screendata2.description}</Text>
      </View>


      <View style={Style.Button}>
        <CommonButton onPress={() => navigation.navigate('Splashscreen3')} title={'Next'} />
      </View>
      <Loader visible={isLoading} />
    </View>

  )
}