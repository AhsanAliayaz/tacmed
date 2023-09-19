import { View, Text,TouchableOpacity,Image,FlatList,ImageBackground,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import Style from '../../../Constants/Style'
import InputText from '../../../Components/InputText/InputText'
import { Colors } from '../../../Constants/Colors'
import HeaderTop from '../../../Components/HeaderTop/HeaderTop'
import CommonButton from '../../../Components/CommonButton/CommonButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Loader from '../../Loader/Loader'
import AndroidToast from '../../AndroidToast/AndroidToast'
import { changePassword_api } from '../../../Apis/UserApi'
import { useSelector } from 'react-redux'


export default function UpdatePassword({navigation}) {

    const userdata = useSelector(state => state?.USER.userData.userdata.api_token)

    console.log('uthdersada>?????',userdata)

    const [isLoading, setIsLoading] = useState(false)
    const [Oldpassword, setOldPassword] = useState('');
    const [OldpasswordError, setOldPasswordError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [Confirmpassword, setConfirmpassword] = useState('');
    const [ConfirmpasswordError, setConfirmpasswordError] = useState('');

    const [MatchPassword, setMatchPassword] = useState('');




    const passwordHandler = () => {
        if (Validation()) {
            console.log('validationHandler')
            setIsLoading(true)
            const sData = new FormData();

            sData.append('old_password', Oldpassword);
            sData.append('password', password);
            sData.append('password_confirmation', Confirmpassword);
            console.log('sDatamain>>>>>>>>>>', sData)
            changePassword_api(sData, { auth: userdata })
                .then(res => {

                    setIsLoading(false)

                    if (res.status === 'success') {
                        AndroidToast('Password Changed successfully')
                        navigation.navigate('Profile')
                    }
                    // navigation.navigate('Login')
                })
                .catch(e => {
                    setIsLoading(false)
                    // ToastAndroid.show("Something went wrong", ToastAndroid.SHORT);
                    console.log('changepasword Screen catch', e);
                    AndroidToast('your old password is incorrect')
                })
        }
        // navigation.navigate('SignUp')
    }

    const Validation = () => {

        if (!password && !Confirmpassword) {


            setPasswordError('Please Enter Password')

            setConfirmpasswordError('Please Enter Confirm Password')


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

  return (
    <View style={Style.RootContainer}>
            <ImageBackground
                style={Style.ImageBackground}
                source={require("../../../Assets/Png/15.png")}
                resizeMode="stretch">
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: wp(25)}}>

                    <HeaderTop title={'Update Password'} onPress={() => navigation.goBack()} />

                    <View style={Style.ViewimageUpdate}>
                        <Image resizeMode='contain' style={{ width: 250, height: 250, }} source={require('../../../Assets/Png/30.png')} />
                    </View>

                    <View style={Style.DetailsCard}>
                        <Text style={Style.TextDetailsForget}>
                            Enter Your New Creditionals 
                            
                        </Text>
                    </View>

                    <View style={Style.ParentViewTextInputUpdate}>


                    <View style={Style.TopFullName}>
                            <Text style={Style.TextfullNameTop}>Old Password</Text>
                        </View>
                        <InputText emailstate={Oldpassword} setEmail={(text) => { setOldPassword(text), setOldPasswordError('') }} placeholder={'Password'}
                            borderColor={OldpasswordError ? 'red' : Colors.neutral551}
                            borderWidth={OldpasswordError ? 1 : 1}
                        />

                        <View style={Style.TopFullName}>
                            <Text style={Style.TextfullNameTop}>New Password</Text>
                        </View>
                        <InputText emailstate={password} setEmail={(text) => { setPassword(text), setPasswordError('') }} placeholder={'Password'}
                            borderColor={passwordError ? 'red' : Colors.neutral551}
                            borderWidth={passwordError ? 1 : 1}
                        />

                        <View style={Style.TopFullName}>
                            <Text style={Style.TextfullNameTop}>Confirm New Password</Text>
                        </View>
                        <InputText emailstate={Confirmpassword} setEmail={(text) => { setConfirmpassword(text), setConfirmpasswordError(''), setMatchPassword('') }} placeholder={'Confirm Password'}
                            borderColor={ConfirmpasswordError ? 'red' : Colors.neutral551}
                            borderWidth={ConfirmpasswordError ? 1 : 1}
                        />

                        {MatchPassword ? (<Text style={Style.matchpassmain}>{MatchPassword}</Text>) : null}

                    </View>

                    <View style={Style.ButtonUpdatePassword}>
                        <CommonButton onPress={() => passwordHandler()} title={'Update'} />
                    </View>

                </ScrollView>

                <Loader visible={isLoading} />
            </ImageBackground>
        </View>
 
  )
}