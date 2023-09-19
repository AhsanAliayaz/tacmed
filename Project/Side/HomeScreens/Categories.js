import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { Colors } from '../../Constants/Colors'
import Style from '../../Constants/Style'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Searchbar from '../../Components/Searhbar/SearchBar'


export default function Categories({ navigation, route }) {

  const categoriesDaTA = route?.params?.categoriesDaTA
  //  console.log('categores>>>>>',categoriesDaTA)
  const [searchResults, setSearchResults] = useState('')


  return (
    <View style={Style.RootContainer}>

      <FlatList


        showsVerticalScrollIndicator={false}
        data={[1]}

        renderItem={() => (
          <View>

            <HeaderTop title={'Categories'} onPress={() => navigation.goBack()} />

            <View style={Style.search_bar}>
              <Searchbar
                value={searchResults}
                onChangeText={(text) => { setSearchResults(text) }}
              />
            </View>

            <View style={{ marginLeft: wp(3), }}>
              <FlatList
                data={categoriesDaTA}
                numColumns={1}
                contentContainerStyle={{ paddingBottom: wp(3) }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  // console.log('item,',item)
                  if (searchResults === '') {
                    return (
                      <TouchableOpacity style={Style.TouchMainflatluistdata13} onPress={() => navigation.navigate('Subcategories', { category_detals: item })} >

                        <Image resizeMode='cover' style={{ width: wp(90), height: wp(35), borderRadius: 5, }} source={{ uri: item.category_image }} />

                        <View style={Style.TextParentCategory}>

                          <Text style={Style.TextNamecategories}>{item.category_name}</Text>
                        </View>

                      </TouchableOpacity>
                    )
                  }

                  if (item.category_name.toLowerCase().includes(searchResults.toLowerCase())) {
                    return (

                      <TouchableOpacity style={Style.TouchMainflatluistdata13} onPress={() => navigation.navigate('Subcategories', { category_detals: item })} >

                        <Image resizeMode='cover' style={{ width: wp(90), height: wp(35), borderRadius: 5, }} source={{ uri: item.category_image }} />

                        <View style={Style.TextParentCategory}>

                          <Text style={Style.TextNamecategories}>{item.category_name}</Text>

                        </View>

                      </TouchableOpacity>

                    )

                  }
                }
                }
              />
            </View>

            {/* <View style={Style.imagebottomCategories}>
        <Image resizeMode='contain' style={{width: 200,height: 200}} source={require('../../Assets/Png/25.png')} />
      </View> */}

          </View>

        )} />

    </View>
  )
}