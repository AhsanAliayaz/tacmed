// import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Style from '../../Constants/Style'
// import { Colors } from '../../Constants/Colors'
// import HeaderTop from '../../Components/HeaderTop/HeaderTop'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// // import Video from 'react-native-video'

// export default function DeatilsMedical({ navigation, route }) {


//     const med = route?.params?.med
//     // console.log("Cate???????????????????????????????????????", med) 

//     return (
//         <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
//             <View style={Style.RootContainer}>

//                 <HeaderTop title={med.subcategory_name} onPress={() => navigation.goBack()} />

//                 <View style={Style.MainImageTop}>
//                     <Image resizeMode='contain' style={{ width: wp(90), height: wp(60), borderRadius: 10, }} source={{ uri: med.subcategory_image }} />
//                 </View>

//                 <View style={Style.Text1View}>
//                     <Text style={Style.TextDetails}>{med.subcategory_long_description}</Text>


//                 </View>


//                 {/* <View style={Style.VideoView}>

//                     <Video
//                         resizeMode="contain"
//                         source={{ uri: deatils.subcategory_video }}
//                         style={{
//                             flex: 1,
//                             //   borderTopLeftRadius: wp(10),
//                             //   borderTopRightRadius: wp(10),
//                             width: '100%',
//                             height: '100%',
//                             borderRadius: 20,
//                             overflow: 'hidden',
//                             justifyContent: 'center',

//                         }}

//                         controls={true}
//                     />

//                 </View> */}





//             </View>
//         </ScrollView>
//     )
// }