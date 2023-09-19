import { View, Text,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import SearchIcon from 'react-native-vector-icons/EvilIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Searchbar({value,onChangeText}) {
  return (
    <View style={Style.SearchContainer}>
    <TextInput
    value={value}
    onChangeText={onChangeText}
    style={Style.TextInputStyle} placeholder='Search Here' />
    <TouchableOpacity>
    <Image style={{width: 21,height: 21, right: wp(4), }} source={require('../../Assets/Png/pan.png')} />
    </TouchableOpacity>
    </View>
  )
}