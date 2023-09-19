import { View, Text,ImageBackground,TouchableOpacity,ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Style from '../../Constants/Style'
import InputText from '../../Components/InputText/InputText';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { Colors } from '../../Constants/Colors';
import AndroidToast from '../AndroidToast/AndroidToast';
import Loader from '../Loader/Loader';
import { login_api } from '../../Apis/UserApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/Action/Index';
import SplashScreen from 'react-native-splash-screen';

export default function SignIn({navigation}) {
  useEffect(() => {
        SplashScreen.hide();
    }, [])
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)


    const [email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
  
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const Validation = () => {
    //  navigation.navigate('BottomTab')
      if (!email && !password) {
  
        setEmailError('Please Enter Email')
        setPasswordError('Please Enter Password')
      
  
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
  
      else if (password.length < 8) {
        setPasswordError('Please enter atleast 8 character.')
        return false
      }
  
      return true
  
    }

    const loginHandler = () => {

      if (Validation()) {
          setIsLoading(true)
          const data = new FormData();
          data.append('email', email);
          data.append('password', password);
          // console.log('data', data);
          login_api(data)
              .then(res => {
                  
                  dispatch(addUser(res))
                  // dispatch(addUser(res))
                  setIsLoading(false)
                  // navigation.navigate('BottomTab')
              })
              .catch(err => {
                  // console.log('from Login catch Block ', err.response.data)
                  console.log('from Login catch Block ', err)
                  setIsLoading(false)
                  // dispatch(addUser())
                  AndroidToast(err?.response?.data?.message)
                  // ToastAndroid.show(err.message, ToastAndroid.SHORT);
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
        <View style={Style.LoginFreeTextParent}>
          <Text style={Style.TextFreemain}>Welcome Back!</Text>
          
        </View>
        
          <View style={Style.Viewimage}>
            <Image resizeMode='contain' style={{width: 150, height: 150,}} source={require('../../Assets/Png/16.png')} /> 
          </View>

          <View style={Style.academy45}>
          <Text style={Style.Textacademy}>TACMED ACADEMY</Text>
          
        </View>

        <View style={Style.ParentViewTextInputLogin}>
         
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
          
          <InputText emailstate={password} setEmail={(text) => { setPassword(text), setPasswordError('') }} placeholder={'Password'} 
          borderColor={passwordError ? 'red' : Colors.neutral551}
          borderWidth={passwordError ? 1 : 1}
          />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={Style.TouchForgotPassWord}>
           <Text style={Style.TextViewText}>Forgot Password?</Text>
          </TouchableOpacity> 

        </View>

        <View style={Style.Button}>
          <CommonButton onPress={() => loginHandler()} title={'Sign In '} />
        </View>

        <View style={Style.DontHaveAccountView}>
          <Text style={Style.TextDontHaveAcoount}>Don't Have a Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={Style.TextSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <Loader visible={isLoading} />
    </ImageBackground>
  </View>

  )
}