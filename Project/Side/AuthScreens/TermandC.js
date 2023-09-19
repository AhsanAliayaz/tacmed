import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from '../../Constants/Style'
import CommonButton from '../../Components/CommonButton/CommonButton'
import { Privacy } from '../../Apis/UserApi'
import Loader from '../Loader/Loader'


export default function TermandC({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)
  const [screendata1, setscreendata1] = useState('')

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      PrivacyScreen1()
    });

    return unsubscribe;
  }, [navigation]);

  const PrivacyScreen1 = async () => {
    setIsLoading(true)
    await Privacy()
      .then(res => {
        console.log("Privacy screen 1 Api>>>>><<<<", res)
        setscreendata1(res.term)
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
          <Text style={Style.HomeTewxt}>Terms & Conditions</Text>
        </View>

        <View style={Style.DetailsCardsplash}>
          <Text style={Style.TextDetailsForgetSplash}>{screendata1.description}</Text>
        </View>

        <View style={Style.Buttonterm}>
          <CommonButton onPress={() => navigation.navigate('PrivacyPolicy')} title={'Done'} />
        </View>
        <Loader visible={isLoading} />
      </View>
    </ScrollView>
  )
}