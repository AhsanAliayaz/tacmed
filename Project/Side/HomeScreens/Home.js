import { View, Text, TouchableOpacity, Image, FlatList, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../Constants/Colors'
import Style from '../../Constants/Style'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Data1 } from '../../Components/DummyData/DummyData'
import Searchbar from '../../Components/Searhbar/SearchBar'
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { all_Category, all_medical } from '../../Apis/UserApi';
import SplashScreen from 'react-native-splash-screen';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';


export default function Home({ navigation }) {



  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const userdata = useSelector(state => state?.USER)

  // console.log('userData>>>>>???',userdata.userData.userdata.api_token)

  const [isLoading, setIsLoading] = useState(false)

  const [CategoryData, setCategoryData] = useState([])
  const [MedicalData, setMedicalData] = useState([])

  // console.log('PendingData------------------',MedicalData)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      CategoryData_Hndler()
      MedicalList_Hndler()

    });

    return unsubscribe;
  }, [navigation]);

  const CategoryData_Hndler = async () => {
    setIsLoading(true)
    await all_Category({ auth: userdata.userData.userdata.api_token })
      .then(res => {
        console.log("Pending screen all services Api>>>>><<<<", res)
        setCategoryData(res.data)
        setIsLoading(false)

      })
      .catch(err => {
        console.log('Error from all Services Api catch....', err.response.data)
        setIsLoading(false)

      })
  }


  const MedicalList_Hndler = async () => {
    setIsLoading(true)
    await all_medical({ auth: userdata.userData.userdata.api_token })
      .then(res => {
        console.log("Pending screen all services Api>>>>><<<<", res)
        setMedicalData(res.data)
        setIsLoading(false)

      })

      .catch(err => {
        console.log('Error from all Services Api catch....', err.response.data)
        setIsLoading(false)

      })
  }


  return (
    <View style={Style.RootContainer}>
      <View style={Style.HeaderTopParentView}>
        <View style={Style.ViewHomeHeader}>
          <Text style={Style.HomeTewxt}>Home</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={Style.ContactIconTouch}>
          <Image resizeMode='contain' style={{ width: 20, height: 20, }} source={require('../../Assets/Png/20.png')} />
        </TouchableOpacity>

      </View>
      {/* 
       <View style={Style.search_bar}>
        <Searchbar  />
       </View> */}

      <View style={Style.caterogesViewParent}>
        <Text style={Style.TextCatergies}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Categories', { categoriesDaTA: CategoryData })}>
          <Text style={Style.TextBrowseAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: wp(3.5), }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={CategoryData.slice(0, 4)}
          horizontal={true}
          keyExtractor={(_, index) => `Slider1_${index}`}
          // key={"#"}
          //showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            //  console.log('item',item.subcategory)
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  //console.log("data checkkkkkkk",item.item)
                  navigation.navigate('Subcategories', { category_detals: item })

                } style={Style.TouchMainflatluist} >

                <Image resizeMode='cover' style={{ width: 95, height: 73, borderRadius: 5, }} source={{ uri: item?.category_image }} />

                <View style={Style.TextParent}>
                  <Text style={Style.TextName}>{item?.category_name}</Text>
                </View>

              </TouchableOpacity>
            )
          }
          }
        />
        </View>

      <View>
        <BannerAd unitId={TestIds.BANNER}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>

      <View style={Style.BrowseNewMedicalParentView}>

        <Text style={Style.TextBrowse}>Browse New Medical Collection</Text>

        <TouchableOpacity onPress={() => navigation.navigate('MedicalCollection', { med: MedicalData })}>
          <Text style={Style.TextBrowseAll}>See all</Text>
        </TouchableOpacity>

      </View>

      
      <View style={Style.ViewParentType}>
        <FlatList
          data={MedicalData.slice(0, 4)}

          horizontal={true}

          contentContainerStyle={{ paddingBottom: wp(20.2) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            // console.log('item>>>>>>>?????????????????????????????????????????????????????',item)
            return (

              <TouchableOpacity onPress={() => navigation.navigate('DeatilsScreen', { deatils: item })} style={Style.TouchMainflatluistdata12} activeOpacity={0.5}>

                <Image resizeMode='cover' style={{ width: wp(90), height: wp(40), borderRadius: 5, }} source={{ uri: item.subcategory_image }} />

                <View style={Style.TextParentData1}>
                  <Text style={Style.TextNametitle}>{item.subcategory_name}</Text>
                  <Text numberOfLines={3} style={Style.TextDeatilsHomeCard}>{item.subcategory_short_description}</Text>
                </View>

              </TouchableOpacity>

            )
          }
          }
        />
              </View>

      <Loader visible={isLoading} />

    </View>
  )
}