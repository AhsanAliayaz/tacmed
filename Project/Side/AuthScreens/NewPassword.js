import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import InputText from '../../Components/InputText/InputText'
import CommonButton from '../../Components/CommonButton/CommonButton'
import AndroidToast from '../AndroidToast/AndroidToast'
import Loader from '../Loader/Loader'
import { resetPassword_api } from '../../Apis/UserApi'


export default function NewPassword({ navigation,route}) {

    const email = route?.params?.email
    const pin = route?.params?.pin

    const [isLoading, setIsLoading] = useState(false)


    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [Confirmpassword, setConfirmpassword] = useState('');
    const [ConfirmpasswordError, setConfirmpasswordError] = useState('');

    const [MatchPassword, setMatchPassword] = useState('');


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

    const passwordHandler = () => {
        if (Validation()) {
            // console.log('validationHandler')
            setIsLoading(true)
            const formData = new FormData();
            formData.append('email', email);
            formData.append('pin', pin);
            formData.append('password', password);
            formData.append('password_confirmation', Confirmpassword);
            // console.log('formData', formData)
            resetPassword_api(formData)
                .then(res => {
                    setIsLoading(false)
                    console.log('ForgotPassword Screen then', res);
                    if (res.status === 'success') {
                        AndroidToast('Password reset successfully')
                        navigation.navigate('SignIn')
                    }
                    // navigation.navigate('Login')
                })
                .catch(e => {
                    setIsLoading(false)
                    // ToastAndroid.show("Something went wrong", ToastAndroid.SHORT);
                    console.log('changePassword  Screen catch', e?.response?.data);
                    AndroidToast(e?.response?.data?.message.password[0])
                })
        }
        // navigation.navigate('SignUp')
    }
    return (
        <View style={Style.RootContainer}>
            <ImageBackground
                style={Style.ImageBackground}
                source={require("../../Assets/Png/15.png")}
                resizeMode="stretch">
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>

                    <HeaderTop title={'Update Password'} onPress={() => navigation.goBack()} />

                    <View style={Style.ViewimageUpdate}>
                        <Image resizeMode='contain' style={{ width: 250, height: 250, }} source={require('../../Assets/Png/19.png')} />
                    </View>

                    <View style={Style.DetailsCard}>
                        <Text style={Style.TextDetailsForgetSplash}>
                            Please Enter Your New Creditionals 
                            
                        </Text>
                    </View>

                    <View style={Style.ParentViewTextInputLogin}>

                        <View style={Style.TopFullName}>
                            <Text style={Style.TextfullNameTop}>Password</Text>
                        </View>
                        <InputText emailstate={password} setEmail={(text) => { setPassword(text), setPasswordError('') }} placeholder={'Password'}
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
                        <CommonButton onPress={() => passwordHandler()} title={'Update'} />
                    </View>

                </ScrollView>

                <Loader visible={isLoading} />
            </ImageBackground>
        </View>
    )
}