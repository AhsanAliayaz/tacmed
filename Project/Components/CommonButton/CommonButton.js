import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Style from '../../Constants/Style'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../Constants/Colors'


export default function CommonButton({title,onPress,ImagePath}) {
  return (
    <TouchableOpacity style={Style.ButtonView} onPress={onPress}>
      <Text style={Style.Textstyle}>{title}</Text>
    </TouchableOpacity>
  )
}