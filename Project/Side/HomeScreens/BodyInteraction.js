import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Style from '../../Constants/Style';
import RBSheet from 'react-native-raw-bottom-sheet';
import OrganDetails from '../../Components/OrganDetails';
import { organ_api } from '../../Apis/UserApi';
import Loader from '../Loader/Loader'




export default function BodyInteraction({ navigation }) {
  const refRBSheet = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const [val, setval] = useState("")
  // console.log('nsdasdssdfghjgdfgfdfgdame',val)
  const [organData, setOrganData] = useState('')

  // console.log("valvalval???????????/",organData)



  const OrginDeatis = (i) => {
    setIsLoading(true)
    const data = new FormData();
    data.append('name', i);

    // console.log('dasdkdghta>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data);
    organ_api(data)
      .then(res => {
        // console.log("Pending screen all services Api>>>>><<<<", res)
        setOrganData(res.data)
        setIsLoading(false)

      })
      .catch(err => {

        // console.log('from Organ catch Block ', err)
        setIsLoading(false)
      })

  }

  return (
    <View style={Style.RootContainer}>

      <View style={Style.ViewHomeHeader}>
        <Text style={Style.HomeTewxt}>Quick Reference Guide</Text>
      </View>

      <View style={Style.BackgroundImageView}>
        <ImageBackground resizeMode='contain' style={Style.BackgroundImage}
          source={require('../../Assets/Png/skelton.png')}
        >

          <View style={Style.organ1}>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Trachea")
              OrginDeatis('Trachea')

            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/tube.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Shoulder")
              OrginDeatis('Shoulder')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/Shoulder.png')} />
            </TouchableOpacity>

          </View>

          <View style={Style.organ2}>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Lungs")
              OrginDeatis('Lungs')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/chest.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Armpit")
              OrginDeatis('Armpit')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/amprit.png')} />
            </TouchableOpacity>
          </View>

          <View style={Style.organ3}>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Intestine")
              OrginDeatis('Intestine')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/intestene.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Arm")
              OrginDeatis('Arm')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/arm.png')} />
            </TouchableOpacity>
          </View>

          <View style={Style.organ4}>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Blood droplet")
              OrginDeatis('Blood droplet')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/blood.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Pelvic or Hips")
              OrginDeatis('Pelvic or Hips')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/hips.png')} />
            </TouchableOpacity>

          </View>

          <View style={Style.organ5}>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Olive green snowflake")
              OrginDeatis('Olive green snowflake')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/sardi.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              refRBSheet.current.open()
              setval("Leg")
              OrginDeatis('Leg')
            }}>
              <Image style={{ width: 50, height: 55, }} source={require('../../Assets/Png/leg.png')} />
            </TouchableOpacity>

          </View>


        </ImageBackground>

      </View>

      <View style={{}}>
        <RBSheet
          ref={refRBSheet}
          height={550}
          openDuration={250}
          closeDuration={200}
          closeOnPressMask={true}
          closeOnDragDown={false}
          closeOnPressBack={true}
          dragFromTopOnly={false}
          customStyles={{
            container: {
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
            },
          }}>
          <OrganDetails

            close={() => refRBSheet.current.close()}
            organData={organData}
          />
        </RBSheet>
      </View>
      <Loader visible={isLoading} />
    </View>
  );
}