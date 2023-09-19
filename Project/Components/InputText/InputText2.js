import { View, Text,TextInput,Image } from 'react-native'
import React from 'react'
import Style from '../../Constants/Style'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../Constants/Colors'


export default function InputText2({placeholder,emailstate,setEmail,editable,onEndEditing}) {
  return (
    <View style={Style.MainViewInput}>
      <TextInput 
      onEndEditing={onEndEditing}
      value={emailstate}
      onChangeText={setEmail}
      style={Style.TextinputMain} editable={editable} secureTextEntry={placeholder=="Password"||placeholder=="Confirm Password"?true:false}  placeholderTextColor={Colors.neutral549} />
    </View>
  )
}