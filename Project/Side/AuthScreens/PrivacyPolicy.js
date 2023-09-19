import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from '../../Constants/Style'
import CommonButton from '../../Components/CommonButton/CommonButton'
import { useDispatch } from 'react-redux'
import { addBoarding } from '../../Redux/Action/Index'
import Loader from '../Loader/Loader'
import { Privacy } from '../../Apis/UserApi'

export default function PrivacyPolicy({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [screendata1, setscreendata1] = useState('')

  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      PrivacyScreen2()
    });

    return unsubscribe;
  }, [navigation]);

  const PrivacyScreen2 = async () => {
    setIsLoading(true)
    await Privacy()
      .then(res => {
        console.log("Privacy screen 1 Api>>>>><<<<", res)
        setscreendata1(res.privacy)
        setIsLoading(false)

      })
      .catch(err => {
        console.log('Error from all Services Api catch....', err.response.data)
        setIsLoading(false)

      })
  }

  


  return (
    <ScrollView>
      <View style={Style.RootContainer}>

        <View style={Style.ViewHomeHeader}>
          <Text style={Style.HomeTewxt}>Privacy Policy</Text>
        </View>

        <View style={Style.DetailsCardsplash}>
          <Text style={Style.TextDetailsForgetSplash}>{screendata1.description}</Text>
        </View>

        <View style={Style.Button}>
          <CommonButton onPress={() => { navigation.navigate('SignIn'), dispatch(addBoarding()) }} title={'Done'} />
        </View>
        
        <Loader visible={isLoading} />
      </View>

    </ScrollView>
  )
}