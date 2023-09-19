import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Style from '../../Constants/Style'
import ImageCropPicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputText from '../../Components/InputText/InputText';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { Colors } from '../../Constants/Colors';
import FeatherCamera from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux'
import { signup_api } from '../../Apis/UserApi';
import Loader from '../Loader/Loader';
import { addUser } from '../../Redux/Action/Index';
import AndroidToast from '../AndroidToast/AndroidToast';




export default function SignUp({ navigation }) {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const [ProfileImage, setProfileImage] = useState('')
  const [ProfileImageError, setProfileImageError] = useState('')

  const [UserName, setUserName] = useState('');
  const [UserNameError, setUserNameError] = useState('');

  const [email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [Confirmpassword, setConfirmpassword] = useState('');
  const [ConfirmpasswordError, setConfirmpasswordError] = useState('');

  const [MatchPassword, setMatchPassword] = useState('');

  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const emptyFeildHandler = () => {
    setUserName('')
    setEmail('')
    setPassword('')
    setProfileImage('')
    setConfirmpassword('')
   }


  const Validation = () => {

    if (!email && !password && !UserName && !Confirmpassword && !ProfileImage) {

      setEmailError('Please Enter Email')
      setPasswordError('Please Enter Password')
      setUserNameError('Please Enter UserName')
      setConfirmpasswordError('Please Enter Confirm Password')
      setProfileImageError('Please upload Image')

      return false
    }
    else if (!email) {
      setEmailError('please enter Email')
      return false
    }
    else if (emailCheck.test(email) === false) {
      setEmailError('Email is must have valid Syntax');
      return false;
    }
    else if (!ProfileImage) {
      setProfileImageError('please upload image')
      return false
    }
    else if (!UserName) {
      setUserNameError('please enter UserName')
      return false
    }

    else if (!Confirmpassword) {
      setConfirmpasswordError('please enter Confirm Pass')
      return false
    }
    else if (password != Confirmpassword) {
      setMatchPassword('Password Not Match.')
      return false

    }

    else if (password.length < 8) {
      setPasswordError('Please enter atleast 8 character.')
      return false
    }

    return true

  }



  const uploadImageHandler = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,

    }).then(image => {
      // console.log(image);
      setProfileImage(image.path)
      setProfileImageError('')
      // setStreamImage({ path: image.path, type: image.mime })
    }).catch(e => {
      console.log('User Cancel Image Profile Image', e)
    })
  }


  const signUpHandler = () => {
    // console.log('signUpHandler', validationHandler())
    if (Validation()) {
      setIsLoading(true)
      const data = new FormData();
      data.append('image', {
        uri: ProfileImage,
        name: 'image' + new Date() + '.jpg',
        type: 'image/jpeg',
      });
      data.append('fullname', UserName);
      data.append('email', email);
      data.append('password', password);
      data.append('password_confirmation', Confirmpassword);

      
       console.log('data response', JSON.stringify(data))
      signup_api(data)
        .then(res => {
          console.log('Sinup Then Response ........', res)
          
          dispatch(addUser(res))
           
          setIsLoading(false)
          emptyFeildHandler()
          // navigation.navigate('SignIn')
          AndroidToast('Account Created Successfully')
        })
        .catch(err => {

          console.log('from Signup catch Block ', err.response.data)

          if (err.response.data.message.email) {
            AndroidToast(err.response.data.message.email[0])
          }
          else if (err.response.data.message.password) {

          }
          setIsLoading(false)
        })
    }
  }


  return (
    <View style={Style.RootContainer}>
      <ImageBackground
        style={Style.ImageBackground}
        source={require("../../Assets/Png/15.png")}
        resizeMode="stretch">
        <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
          <View style={Style.SignupFreeTextParent}>
            <Text style={Style.TextFreemain}>Create New Account</Text>

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
              <View style={[Style.ProfileBorderLine,{
                borderWidth: ProfileImageError ? 1 : 1,
                borderColor:  ProfileImageError ? 'red' : Colors.neutral551, 
            
              }]}>
                <View style={Style.ImageProfile}>
                  {ProfileImage ?

                    <Image resizeMode='contain' style={{ width: 90, height: 90, borderRadius: 50,}} source={{ uri: ProfileImage }} />

                    :
                    <FontAwesome style={Style.UserIcxonstyle} name='user' size={50} color={'#454411'} />

                  }
                  
                  <TouchableOpacity 
                  style={{position: 'absolute',width: wp(9),backgroundColor: 'white',
                  borderWidth: 1,
                   height: wp(9), borderRadius: 50,
                   top: wp(11),
                   left: wp(9),
                   alignItems: 'center',
                   justifyContent: 'center',
                }} 
                  onPress={() => uploadImageHandler()}>
                 <FeatherCamera name='camera' size={20} color={'black'} />
                  </TouchableOpacity>

                </View>

              </View>

            </View>

          </View>
          <View style={Style.ParentViewTextInput}>
            <View style={Style.TopFullName}>
              <Text style={Style.TextfullNameTop}>Full Name</Text>
            </View>
            <InputText emailstate={UserName} setEmail={(text) => { setUserName(text), setUserNameError('') }} placeholder={'Full Name'} 
             borderColor={UserNameError ? 'red' : Colors.neutral551}
             borderWidth={UserNameError ? 1 : 1}
            />

            <View style={Style.TopFullName}>
              <Text style={Style.TextfullNameTop}>E-mail</Text>
            </View>
            <InputText emailstate={email} setEmail={(text) => { setEmail(text), setEmailError('') }} placeholder={'Enter e-mail'} 
            borderColor={EmailError ? 'red' : Colors.neutral551}
            borderWidth={EmailError ? 1 : 1}
            />

            <View style={Style.TopFullName}>
              <Text style={Style.TextfullNameTop}>Password</Text>
            </View>
            <InputText emailstate={password} setEmail={(text) => { setPassword(text), setPasswordError(''), setMatchPassword('') }} placeholder={'Password'} 
            borderColor={passwordError ? 'red' : Colors.neutral551}
            borderWidth={passwordError ? 1 : 1}
            />

            <View style={Style.TopFullName}>
              <Text style={Style.TextfullNameTop}>Confirm Password</Text>
            </View>
            <InputText emailstate={Confirmpassword} setEmail={(text) => { setConfirmpassword(text), setConfirmpasswordError(''), setMatchPassword('') }} placeholder={'Confirm Password'} 
             borderColor={ConfirmpasswordError ? 'red' : Colors.neutral551}
             borderWidth={ConfirmpasswordError ? 1 : 1}
            />
            
            {MatchPassword ? (<Text style={Style.matchpassmain}>{MatchPassword}</Text>) : null}

          </View>

          <View style={Style.Button}>
            <CommonButton onPress={() => signUpHandler()} title={'Sign Up'} />
          </View>

          <View style={Style.DontHaveAccountView}> 
            <Text style={Style.TextDontHaveAcoount}>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={Style.TextSignUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
        
        </ScrollView>

        <Loader visible={isLoading} />
      </ImageBackground>
    </View>

  )
}