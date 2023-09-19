import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from '../../Constants/Style'
import { Colors } from '../../Constants/Colors'
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import CommonButton from '../../Components/CommonButton/CommonButton';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import AndroidToast from '../AndroidToast/AndroidToast'
import Loader from '../Loader/Loader'
import { verifyEmail_api } from '../../Apis/UserApi'

export default function Otp({ navigation,route }) {

    const email = route?.params?.email;
    const [isLoading, setIsLoading] = useState(false)

    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const [valueError, setValueError] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

    const ValidationMain = () => {
        if (!value) {
    
          setValueError('Please Enter Pin')
          return false
        }
      
    
    
        return true
      }
    
    const verifyCode_Handler = () => {
        if (ValidationMain()) {
            console.log('Verify Code')
            setIsLoading(true)
            const formData = new FormData();
            formData.append('email', email);
            formData.append('pin', value);
    
            verifyEmail_api(formData)
                .then(res => {
                    setIsLoading(false)
                    console.log('VerifyCode Screen then', res);
                    if (res.status === 'success') {
                        navigation.navigate('NewPassword', { email: email, pin: value })
                    }
                    // navigation.navigate('ForgotPassword', { email: email, pin: value })
    
                })
                .catch(e => {
                    setIsLoading(false)
                    AndroidToast(e?.response?.data?.error)
                    console.log('VerifyCode Screen catch', e?.response?.data);
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

                    <HeaderTop title={'Verification'} onPress={() => navigation.goBack()} />

                    <View style={Style.Viewimage}>
                        <Image resizeMode='contain' style={{ width: 250, height: 250, }} source={require('../../Assets/Png/18.png')} />
                    </View>

                    <View style={Style.DetailsCard}>
                        <Text style={Style.TextDetailsForget}>
                            Please type the verification code sent to
                            prelookstudio@gmail.com
                        </Text>

                    </View>

                    <View style={Style.CodeFieldView}>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={Style.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Text
                                        key={index}
                                        style={[Style.cell, isFocused && Style.focusCell &&
                                            Style.bodyLarge,
                                        { color: Colors.neutral549,
                                            borderWidth: valueError ? 1 : 1, borderColor: valueError ? 'red' : Colors.neutral551
                                        
                                        }

                                        ]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />

                        </View>

                    <View style={Style.ButtonForget}>
                        <CommonButton onPress={() => verifyCode_Handler()} title={'Verify'} />
                    </View>


                </ScrollView>

                <Loader visible={isLoading} />
            </ImageBackground>
        </View>

    )
}