import { View, Text,TextInput,Image } from 'react-native'
import React from 'react'
import Style from '../../Constants/Style'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../Constants/Colors'


export default function InputText({placeholder,emailstate,setEmail,borderColor,borderWidth}) {
  return (
    <View style={[Style.MainViewInput,{
      borderWidth: borderWidth,
      borderColor: borderColor,
    }]}>
      <TextInput 
      value={emailstate}
      onChangeText={setEmail}
      style={Style.TextinputMain} secureTextEntry={placeholder=="Password"||placeholder=="Confirm Password"?true:false} placeholder={placeholder} placeholderTextColor={Colors.neutral553} />
    </View>
  )
}