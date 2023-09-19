import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from '../../Constants/Style'
// import { Colors } from '../../Constants/Colors'
// import { Data1 } from '../../Components/DummyData/DummyData'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Searchbar from '../../Components/Searhbar/SearchBar'
// import { all_Category } from '../../Apis/UserApi'
import Loader from '../Loader/Loader'
import { useSelector } from 'react-redux'
// import { subsearch_api } from '../../Apis/UserApi'

export default function Subcategories({ navigation, route }) {

  const userdata = useSelector(state => state?.USER)
  // console.log("routes",route?.params)
  const category_detals = route?.params?.category_detals

  const [searchResults, setSearchResults] = useState('')


  // console.log('first',searchResults)

  // const [search, setSearch] = useState('')

  // console.log('search????????????',search)
  // const [srresult,setsrresults] = useState();


  // if (search === '' && searchResults.length > 0) {
  //   setSearchResults([])

  // }

  // const searchTab = () => {

  //   setsrresults()


  // }

  // const searchHandler = () => {
  //   const sData = new FormData()
  //   sData.append('search', search)
  //   if (search === '') {
  //     console.log('Search is empty')
  //     setSearchResults([])

  //   }
  //   else {
  //     subsearch_api({ auth: userdata.userData.userdata.api_token })
  //       .then(res => {
  //         if (res.status === 'success') {
  //           console.log('Then from searchHandler() Search Screen catch....', res)
  //           setSearchResults(res.data)
  //         }
  //       })
  //       .catch(err => {
  //         console.log('Error from searchHandler() Search Screen catch....', err.response.data.message)
  //       })
  //   }

  // }

  // const searchMethod = (item) => {

  // }

  return (


    <ScrollView>
      <View style={Style.RootContainer}>

        <HeaderTop title={category_detals.category_name} onPress={() => navigation.goBack()} />

        <View style={Style.search_bar}>
          <Searchbar
            value={searchResults}
            onChangeText={(text) => { setSearchResults(text) }}
          />
        </View>
        {/* <View>
          <FlatList
            data={searchResults}
            // numColumns={1}
            //  horizontal={true}
            key={"#"}
            contentContainerStyle={{ paddingBottom: wp(3) }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              // console.log('Search>>>>>>>', item2)
              return (

                <View style={Style.TouchMainflatluistdata14} activeOpacity={0.5}>



                  <TouchableOpacity onPress={() => searchTab()} style={Style.TextParentData13}>

                    <Text style={Style.TextDeatilsHomeCard12}>{item.subcategory_name}</Text>
                  </TouchableOpacity>

                </View>

              )
            }
            }
          />

        </View> */}

        <View style={Style.BrowseNewMedicalParentView}>

          <Text style={Style.TextBrowse}>Sub Categories</Text>

        </View>

        <View style={Style.ViewParentType}>

          <FlatList
            data={category_detals.subcategory}
            // numColumns={1}
            //  horizontal={true}
            key={"#"}
            contentContainerStyle={{ paddingBottom: wp(3) }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              console.log('item>>>>>>>', item)
              if (searchResults === '') {
                return (

                  <TouchableOpacity onPress={() => navigation.navigate('DeatilsScreen', { deatils: item, catedetails: category_detals })} style={Style.TouchMainflatluistdata12} activeOpacity={0.5}>

                    <Image resizeMode='cover' style={{ width: wp(90), height: wp(40), borderRadius: 5, }} source={{ uri: item.subcategory_image }} />


                    <View style={Style.TextParentData1}>
                      <Text style={Style.TextDeatilsHomeName}>{item.subcategory_name}</Text>
                      <Text numberOfLines={3} style={Style.TextDeatilsHomeCard}>{item.subcategory_short_description}</Text>
                    </View>

                  </TouchableOpacity>

                )
              }

              if (item.subcategory_name.toLowerCase().includes(searchResults.toLowerCase())) {
                return (

                  <TouchableOpacity onPress={() => navigation.navigate('DeatilsScreen', { deatils: item, catedetails: category_detals })} style={Style.TouchMainflatluistdata12} activeOpacity={0.5}>

                    <Image resizeMode='cover' style={{ width: wp(90), height: wp(40), borderRadius: 5, }} source={{ uri: item.subcategory_image }} />


                    <View style={Style.TextParentData1}>
                      <Text style={Style.TextDeatilsHomeName}>{item.subcategory_name}</Text>
                      <Text numberOfLines={3} style={Style.TextDeatilsHomeCard}>{item.subcategory_short_description}</Text>
                    </View>

                  </TouchableOpacity>

                )


              }


            }
            }
          />


        </View>
        {/* <Loader visible={isLoading} /> */}
      </View>
    </ScrollView>
  )
}