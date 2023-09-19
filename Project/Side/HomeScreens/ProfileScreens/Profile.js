import { View, Text, TouchableOpacity, FlatList, Image, ImageBackground, ScrollView,Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from '../../../Constants/Style'
import { Colors } from '../../../Constants/Colors'
import FeatherCamera from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputText2 from '../../../Components/InputText/InputText2';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ImageCropPicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux';
import { editProfile_api } from '../../../Apis/UserApi';
import { addUser } from '../../../Redux/Action/Index';
import Loader from '../../Loader/Loader';
import AndroidToast from '../../AndroidToast/AndroidToast';
import { Delete_User } from '../../../Apis/UserApi';

export default function Profile({ navigation }) {


  const userdata = useSelector(state => state?.USER)
  // console.log('userdata>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',userdata)
  const dispatch = useDispatch()

  const [confirm, setconfirm] = useState(false);

  const [deleteuser, setdeleteuser] = useState(false);

 
  const [isLoading, setIsLoading] = useState(false)
  // console.log('userdata in Profile Screen', userdata)
  const [editImage, seteditImage] = useState("");
  // console.log("first", editImage)


 

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    if (editImage) {
      updateProfileHandler()

    }

    // });

    // return unsubscribe;
  }, [navigation, editImage]);





  const [ProfileImage, setProfileImage] = useState(userdata?.userData?.userdata?.image ? userdata?.userData?.userdata?.image : '')
  const [UserName, setUserName] = useState(userdata?.userData?.userdata?.fullname ? userdata?.userData?.userdata?.fullname : '');
  const [email, setEmail] = useState(userdata?.userData?.userdata?.email);


  const updateProfileHandler = () => {

    setIsLoading(true)
    const sData = new FormData();

    editImage && sData.append('image', {
      uri: editImage,
      name: 'image' + new Date() + '.jpg',
      type: 'image/jpeg',
    });

    sData.append('fullname', UserName);

    editProfile_api({ sData, auth: userdata.userData.userdata.api_token })
      .then(res => {
        console.log('EditProfile Screen then Block', res);


        dispatch(addUser(res))
        setIsLoading(false)

        // navigation.goBack()
        AndroidToast('Profile Updated Successfully')

      })
      .catch(e => {
        console.log('EditProfile Screen ch Block', e.response.data.message);
        setIsLoading(false)
        AndroidToast('Something went wrong')
      })


  }




  const uploadImageHandler = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,

    }).then(image => {
      console.log("path", image);
      setProfileImage(image.path)
      seteditImage(image.path)
      // setStreamImage({ path: image.path, type: image.mime })
    }).catch(e => {
      console.log('User Cancel Image Profile Image', e)
    })
  }


  const delete_user_Hndler = async () => {
   
    await Delete_User({ auth: userdata.userData.userdata.api_token })
      .then(res => {

        console.log("Pending screen all services Api>>>>><<<<", res)

      })
      .catch(err => {
        console.log('Error from all Services Api catch....', err.response.data)
      })
  }


  return (
    <View style={Style.RootContainer}>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: wp(30) }}


      >
        <View style={Style.SignupFreeTextParent2}>
          <Text style={Style.TextFreemain}>Profile</Text>

          {/* <TouchableOpacity onPress={() => uploadImageHandler()} style={Style.TouchAbleOppacityPro}>
              <Image source={ProfileImage ? { uri: ProfileImage } : imagepro}
                style={ProfileImage ? {
                  width: 90, height: 90, borderRadius: 50,
                } : {
                  width: 90, height: 90, borderRadius: 50, top: hp(1)
                }}
                resizeMode='contain'
              />
            </TouchableOpacity> */}

          <View style={Style.profileMainParent}>
            <View style={Style.ProfileBorderLine}>
              <View style={Style.ImageProfile}>


                <Image

                  // source={{ ur: userdata.userData.userdata.image }}
                  source={ProfileImage ? { uri: ProfileImage } : editImage}
                  style={{ width: 90, height: 90, borderRadius: 50, alignItems: 'center', }}
                  resizeMode='contain'

                />

              </View>

            </View>

            <TouchableOpacity
              style={{
                position: 'absolute', width: wp(9), backgroundColor: 'white',
                borderWidth: 1,
                height: wp(9), borderRadius: 50,
                top: wp(20),
                left: wp(15),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => uploadImageHandler()}>
              <FeatherCamera name='camera' size={20} color={'black'} />
            </TouchableOpacity>

          </View>

        </View>
        <View style={Style.ParentViewTextInputProfile}>
          <View style={Style.TopFullName}>
            <Text style={Style.TextfullNameTop}>Full Name</Text>
          </View>
          <InputText2 onEndEditing={() => updateProfileHandler()} emailstate={UserName} setEmail={(text) => { setUserName(text) }} placeholder={''} />

          <View style={Style.TopFullName}>
            <Text style={Style.TextfullNameTop}>E-mail</Text>
          </View>
          <InputText2 editable={false} emailstate={email} setEmail={(text) => { setEmail(text) }} placeholder={''}

          />

        </View>


        <TouchableOpacity style={Style.ButtonViewUpdate} onPress={() => navigation.navigate('UpdatePassword')}>
          <Text style={Style.TextstyleUpdate}>Change Password</Text>
          <Ionicons name='chevron-forward' size={25} color={'black'} />
        </TouchableOpacity>

        <View style={Style.ButtonProfile}>
          <CommonButton onPress={() => setconfirm(true)} title={'Log Out'} />
        </View>

        <TouchableOpacity style={Style.ButtonViewUpdate2} onPress={() => setdeleteuser(true)}>
          <Text style={Style.TextstyleUpdate}>Delete Account</Text>
          {/* <Ionicons name='chevron-forward' size={25} color={'black'} /> */}
        </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={confirm}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'rgba(129,128,128,0.8)',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: wp(2),
                                    elevation: 2,
                                    width: wp(90),
                                    height: wp(35),
                                    alignSelf: 'center',
                                }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        alignSelf: 'center',
                                        marginTop: wp(5),
                                    }}>
                                    Are You Sure You Want To Logout
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        marginRight: wp(2),
                                        marginTop: wp(5),
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => setconfirm(false)}
                                        style={{
                                            marginRight: wp(2),
                                            borderWidth: 1,
                                            borderColor: Colors.neutral53,
                                            // borderColor: Colors.primary,
                                            marginTop: wp(5),
                                            alignSelf: 'center',
                                            backgroundColor: 'white',
                                            width: wp(30),
                                            height: wp(12),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderRadius: wp(10),
                                        }}>
                                        <Text
                                            style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(addUser(null))
                                            setconfirm(false)
                                        }}
                                        style={{
                                            marginTop: wp(5),
                                            alignSelf: 'center',
                                            backgroundColor: Colors.neutral551,
                                            width: wp(30),
                                            height: wp(12),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderRadius: wp(10),
                                        }}>
                                        <Text
                                            style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                                            Confirm
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                       

                    </Modal>

                    <Modal animationType="slide" transparent={true} visible={deleteuser}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'rgba(129,128,128,0.8)',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: wp(2),
                                    elevation: 2,
                                    width: wp(90),
                                    height: wp(35),
                                    alignSelf: 'center',
                                }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        alignSelf: 'center',
                                        marginTop: wp(5),
                                    }}>
                                    Are You Sure You Want To Delete Your Account
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        marginRight: wp(2),
                                        marginTop: wp(5),
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => setdeleteuser(false)}
                                        style={{
                                            marginRight: wp(2),
                                            borderWidth: 1,
                                            borderColor: Colors.neutral53,
                                            // borderColor: Colors.primary,
                                            marginTop: wp(5),
                                            alignSelf: 'center',
                                            backgroundColor: 'white',
                                            width: wp(30),
                                            height: wp(12),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderRadius: wp(10),
                                        }}>
                                        <Text
                                            style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(addUser(null))
                                            delete_user_Hndler()
                                        }}
                                        style={{
                                            marginTop: wp(5),
                                            alignSelf: 'center',
                                            backgroundColor: Colors.neutral551,
                                            width: wp(30),
                                            height: wp(12),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderRadius: wp(10),
                                        }}>
                                        <Text
                                            style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                                            Confirm
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                       

                    </Modal>

      </ScrollView>

      <Loader visible={isLoading} />

    </View>

  )
}