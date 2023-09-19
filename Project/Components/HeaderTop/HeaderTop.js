import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Colors } from '../../Constants/Colors' 
import Style from '../../Constants/Style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export default function HeaderTop({title,onPress}) {
  return (
    <View style={Style.MainViewParent}>
      <View style={Style.MainViewParent2}>
        <View style={{width: widthPercentageToDP(7)}}>
        <TouchableOpacity onPress={onPress}>
       <Ionicons name='chevron-back' size={25} color={'black'}  />
       </TouchableOpacity>
       </View>
       <View style={{width: widthPercentageToDP(60),alignItems: 'center',}}>
       <Text style={Style.TextTitle}>{title}</Text>
       </View>
      </View>
    </View>
  )
}