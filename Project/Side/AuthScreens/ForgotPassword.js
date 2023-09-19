import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../Constants/Colors'
import Style from '../../Constants/Style'
import InputText from '../../Components/InputText/InputText'
import CommonButton from '../../Components/CommonButton/CommonButton';
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import AndroidToast from '../AndroidToast/AndroidToast'
import Loader from '../Loader/Loader'
import { forgotEmail_api } from '../../Apis/UserApi'

export default function ForgotPassword({ navigation }) {
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const Validation = () => {
         
        if (!email) {

            setEmailError('Please Enter Email')
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



        return true

    }


    const VerifyHandler = () => {
        if (Validation()) {
            setIsLoading(true)
            const fromData = new FormData();
            fromData.append('email', email);
    
            forgotEmail_api(fromData)
                .then(res => {
                    setIsLoading(false)
                    console.log('verifyEmail.js Then ... ', res);
                    if(res.status==="success"){
                    AndroidToast(res?.message);
                    navigation.navigate('Otp', { email: email })
                    }
                })
                .catch(e => {
                    setIsLoading(false)
                    console.log('verifyEmail.js catch ... ', e?.response?.data);
                    AndroidToast(e?.response?.data?.message);
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

                   <HeaderTop title={'Forgot Password'} onPress={() => navigation.goBack()} />

                    <View style={Style.Viewimage}>
                        <Image resizeMode='contain' style={{ width: 300, height: 300, }} source={require('../../Assets/Png/17.png')} />
                    </View>

                    <View style={Style.DetailsCard}>
                        <Text style={Style.TextDetailsForget}>
                            Provide your account’s email for which
                            you want to reset your password
                            </Text>

                    </View>

                    <View style={Style.ParentViewTextInputForget}>

                        <View style={Style.TopFullName}>
                            <Text style={Style.TextfullNameTop}>E-mail</Text>
                        </View>
                        <InputText emailstate={email} setEmail={(text) => { setEmail(text), setEmailError('') }} placeholder={'Enter email'}
                            borderColor={EmailError ? 'red' : Colors.neutral551}
                            borderWidth={EmailError ? 1 : 1}
                        />

                    </View>

                    <View style={Style.ButtonForget}>
                        <CommonButton onPress={() => VerifyHandler()} title={'Send'} />
                    </View>

                   
                </ScrollView>

                <Loader visible={isLoading} />
            </ImageBackground>
        </View>

    )
}