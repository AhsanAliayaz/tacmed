import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../Constants/Style'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function OrganDetails({close,organData}) {
    // console.log('organData??????',organData)
  return (

    
    <View style={Style.MainViewOrgainDetails}>
        <TouchableOpacity onPress={close} style={Style.TouchCross}>
            <AntDesign name='close' size={25} color={'black'} />
        </TouchableOpacity>
    <ScrollView scrollEnabled={true}>
    <View style={Style.ViewImageOrgan}>
        <Image resizeMode='contain' style={{width: 150,height: 150,}} source={{uri:organData.image}} />
    </View>

    <View style={Style.ViewImageOrgandetails}>
     <Text style={Style.TextOrgan} >
        {organData.description}
     </Text>
    </View>

      </ScrollView>
    </View>

   
    
    
   
  )
}