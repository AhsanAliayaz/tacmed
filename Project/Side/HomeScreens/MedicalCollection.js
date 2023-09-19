import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import { Data1 } from '../../Components/DummyData/DummyData'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Searchbar from '../../Components/Searhbar/SearchBar'


export default function MedicalCollection({navigation,route}) {

  const med = route?.params?.med
  const [searchResults, setSearchResults] = useState('')

  // console.log('med??????>>>>>>>>>>>>>>>>>>>>>>',med)

    return (
        <View style={Style.RootContainer}>
            <HeaderTop title={'Medical Collections'} onPress={() => navigation.goBack()} />

            <View style={Style.search_bar}>
        <Searchbar 
          value={searchResults}
          onChangeText={(text) => { setSearchResults(text)}}
        />
       </View>

            <View style={Style.ViewParentType}>
        <FlatList
          data={med}
          numColumns={1}
          //  horizontal={true}
          key={"#"}
          contentContainerStyle={{paddingBottom: wp(3)}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            // console.log('item>>>>>>>?????????????????????????????????????????med',item)
            if(searchResults === ''){
            return (

              <TouchableOpacity style={Style.TouchMainflatluistdata13} onPress={() => navigation.navigate('DeatilsScreen',{deatils:item})} >

              <Image resizeMode='cover' style={{ width: wp(90),height: wp(35), borderRadius: 5, }} source={{uri:item.subcategory_image}} />
              
              <View style={Style.TextParentCategory}>
                
                  <Text style={Style.TextNametitle}>{item.subcategory_name}</Text>
                  <Text numberOfLines={2} style={Style.TextDeatilsHomeCard}>{item.subcategory_short_description}</Text>

              </View>

              </TouchableOpacity>

            )
            }
               if(item.subcategory_name.toLowerCase().includes(searchResults.toLowerCase())){
              return (

                <TouchableOpacity style={Style.TouchMainflatluistdata13} onPress={() => navigation.navigate('DeatilsScreen',{deatils:item})} >
  
                <Image resizeMode='cover' style={{ width: wp(90),height: wp(35), borderRadius: 5, }} source={{uri:item.subcategory_image}} />
                
                <View style={Style.TextParentCategory}>
                  
                <Text style={Style.TextNametitle}>{item.subcategory_name}</Text>
                <Text numberOfLines={3} style={Style.TextDeatilsHomeCard}>{item.subcategory_short_description}</Text>
  
                </View>
  
                </TouchableOpacity>
  
              )
            }

          }
          }
        />


      </View>


        </View>
    )
}