import { View, Text, TouchableOpacity, Image, FlatList,Linking,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import { About_uss } from '../../Apis/UserApi'


export default function ContactUs({navigation}) {



  const userdata = useSelector(state => state?.USER)
  const [isLoading, setIsLoading] = useState(false)

  const [contactus, setcontactus] = useState({})
  console.log('contact',contactus)



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      Aboout_usHandler()
      
    });

    return unsubscribe;
  }, [navigation]);
  
  const Aboout_usHandler = async () => {
    setIsLoading(true)
    await About_uss({auth:userdata.userData.userdata.api_token})
      .then(res => {
        console.log("Contact us all services Api>>>>><<<<", res)
        setcontactus(res.data)
        setIsLoading(false)
    
      })
      .catch(err => {
        console.log('Error from all Services Api catch....', err.response.data)
        setIsLoading(false)

      })
  }
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={Style.RootContainer}>
      <HeaderTop title={'Contact Us'} onPress={() => navigation.goBack()} />

      <View style={Style.MainViewImage}>
        <Image style={{ width: 180, height: 180, }} source={require('../../Assets/Png/16.png')} />
      </View>


      <View style={Style.MainparentViewemailPhone}>

        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contactus.mail}`)} style={Style.touchViewEmail}>
          
          <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../Assets/Png/28.png')} />
          <Text style={Style.TextEmailText}>{contactus.mail}</Text>

        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => Linking.openURL(`tel:${contactus.phone_no}`)} style={Style.touchViewPhone}>
          <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../Assets/Png/29.png')} />
          <Text style={Style.TextEmailText}>{contactus.phone_no}</Text>
        </TouchableOpacity> */}

      </View>

      <View style={Style.Viewaboutus}>
        <Text style={Style.Textaboutus}>About Us</Text>
      </View>

      <View style={Style.ViewTextDetailsContact}>
        <Text style={Style.Textdeatilscontact}>{contactus.about_us}</Text>
      </View>
      <Loader visible={isLoading} />
    </View>
    </ScrollView>
  )
}