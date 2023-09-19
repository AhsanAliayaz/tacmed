import { StyleSheet } from 'react-native'
import { Colors } from './Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default StyleSheet.create({
    RootContainer: {
    flex: 1,
    backgroundColor: 'F5F5F5',
   
    },
    
    ImageBackground: {
        // width: wp(100),
        // height: hp(100),
        // alignItems: "center",
        // justifyContent: "flex-end"
        flex: 1,
    },
    MainViewInput: {
        width: wp(90),
        height: hp(8),
        backgroundColor: Colors.neutral552,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.neutral551,
    },
    TextinputMain: {
        width: wp(72),
        //    backgroundColor: 'pink', 
        marginLeft: wp(3),
        borderRadius: 10,
        color: Colors.neutral551,
        fontSize: 14,
        fontFamily: 'Inter-Regular'

    },
    SignupFreeTextParent: {
        width: wp(90),
        height: wp(40),
        // backgroundColor: 'pink',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: wp(10),
        justifyContent: 'space-around',
    },
    TextFreemain: {
       fontFamily: 'Inter-SemiBold',
         fontSize: 16,
         color: Colors.neutral549,
    },
    TouchAbleOppacityPro: {
        
    },
    ParentViewTextInput: {
        alignSelf: 'center',
        height: wp(105),
        // backgroundColor: 'pink',
        justifyContent: 'space-around',
    },
    TopFullName: {
        width: wp(90),
        alignSelf: 'center',
        top: wp(1),

    },
    TextfullNameTop: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: Colors.neutral549,
    },
    Button: {
        alignSelf: 'center',
    },
    ButtonView: {
        backgroundColor: Colors.neutral551,
        width: wp(90),
        height: wp(14),
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: wp(15),
    },
    Textstyle: {
        color: Colors.neutral550,
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,

    },
    
    DontHaveAccountView: {
        alignSelf: 'center',
         flexDirection: 'row',
         marginVertical: wp(3),
    },
    TextDontHaveAcoount: {
        fontFamily:'Inter-Regular',
        fontSize: 13,
        color: Colors.neutral553,
    },
    TextSignUp: {
        fontFamily:'Inter-SemiBold',
        fontSize: 13,
        color: Colors.neutral551,
    },
    profileMainParent: {
        alignSelf: 'center',

        
    },
    ProfileBorderLine: {
        width: wp(27),
        height: wp(27),
        borderWidth: 1,
        borderColor: Colors.neutral551,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    ImageProfile: {
        // width: wp(25),
        // height: wp(25),
        alignItems: 'center',
        justifyContent: 'center',
     
       
    },
    UserIcxonstyle: {
        // bottom: wp(2),
    },
    matchpassmain: {
        
        alignSelf: 'center',
        color: 'red',
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        alignSelf: 'flex-start',
        // left: wp(5),
        // bottom: wp(3),\
    
          },
          ParentViewTextInputLogin: {
            alignSelf: 'center',
            height: wp(55),
            // backgroundColor: 'pink',
            justifyContent: 'space-around',
        },
        Viewimage: {
            alignSelf: 'center',
            marginVertical: wp(8),
        },
        academy45: {
            alignSelf: 'center',

        },
        Textacademy: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 16,
            color: Colors.neutral551,
        },
        TouchForgotPassWord: {
            width: wp(90),
            alignItems: 'flex-end',
            // top: wp(1),
        },
        TextViewText: {
            color: Colors.neutral551,
            fontFamily: 'Inter-Medium',
            fontSize: 13,
        },
        MainViewParent: {
             width: wp(93),
             height: wp(20),
            //  backgroundColor: 'pink', 
             alignSelf: 'center',
             
        },
        MainViewParent2: {
            width: wp(80),
            height: wp(20),
            // backgroundColor: 'brown',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        DetailsCard: {
        alignItems: 'center',
        width: wp(82),
        alignSelf: 'center',
        // backgroundColor: 'pink'
        },
        TextDetailsForget: {
        color: 'black',
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        textAlign: 'center',
        },
        ParentViewTextInputForget: {
            alignSelf: 'center',
            height: wp(27),
            // backgroundColor: 'pink',
            justifyContent: 'space-around',
            marginTop: wp(2),  
        },
        TextTitle: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 16,
            color: Colors.neutral549,
        },
        ButtonForget: {
            alignSelf: 'center',
            marginVertical: wp(2),
        },
        CodeFieldView: {
            width: wp(90),
            alignSelf: 'center',
            marginTop: hp(4),
        },
        cell: {
            width: 55,
            height: 55,
            fontSize: 16,
            fontFamily: 'Inter-SemiBold',
            borderRadius: 5,
            textAlign: 'center',
            lineHeight: hp(6.5),
            elevation: 2,
            shadowColor: Colors.neutral549,
                color: Colors.neutral549,
            backgroundColor: Colors.neutral552,
            borderWidth: 1,
            // backgroundColor: colors.neutral100,
        },
        focusCell: {
            borderColor: 'pink',
            borderWidth: 1,
        },
        bodyLarge: {
            fontFamily: 'Poppins-Regular',
            fontSize: 16
        },
        ViewimageUpdate: {
            alignSelf: 'center',
            marginVertical: wp(3),
        },

        LoginFreeTextParent: {
            width: wp(90),
            height: wp(15),
            // backgroundColor: 'pink',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: wp(10),
            justifyContent: 'space-around',
        },
        HeaderTopParentView: {
          width: wp(85),
          height: wp(20),
        //   backgroundColor: 'pink',
          alignSelf: 'center',
          flexDirection: 'row',
          
        },
        ViewHomeHeader: {
            width: wp(85),
          height: wp(20),
        //   backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center'
        },
        ContactIconTouch: {
            width: wp(6),
            height: wp(20),
            // backgroundColor: 'brown',
            alignItems: 'center',
          justifyContent: 'center'

        },
        HomeTewxt: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 18,
            color: Colors.neutral549,
            left: wp(4)
        },
        caterogesViewParent: {
            width: wp(90),
            alignSelf: 'center',
            // backgroundColor: 'pink',
            marginTop: wp(3),
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        TextCatergies: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 14,
            color: Colors.neutral549,
        },
        TouchMainflatluist: {
            width: wp(28),
            height: wp(36),
            backgroundColor: Colors.neutral550,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            margin: wp(1),

            
        },
         
        ViewParentType: {
            // marginTop: wp(2),
            marginLeft: wp(3.5),
            flex: 1,
        
            
        
        },
        ImageViewParent: {
            width: wp(30),
            height: wp(38),
            alignItems: 'center',
            borderRadius: 10,
            alignSelf: 'center',
            top: wp(1),
            
        },
        TextParent: {
            alignSelf: 'center',
            width: wp(25),
            // backgroundColor: 'pink',
            height: wp(14),
            justifyContent: 'center'
        },
        TextName: {
            fontFamily: 'Inter-Medium',
            fontSize: 12,
            color: 'black',
            textAlign: 'center',
        },
        BrowseNewMedicalParentView: {
            width: wp(90),
            flexDirection: 'row',
            // backgroundColor: 'pink',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: wp(6),
        },
        TextBrowse: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 14,
            color: Colors.neutral549,
            
        },
        TextBrowseAll: {
            fontFamily: 'Inter-Medium',
            fontSize: 12,
            color: Colors.neutral549,
            top: wp(1)
        },
        TouchMainflatluistdata1: {
            width: wp(42),
            height: wp(52),
            backgroundColor: Colors.neutral550,
            borderRadius: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
            margin: wp(2),
        },
        TextParentData1: {
            alignSelf: 'center',
            width: wp(80),
            // backgroundColor: 'pink',
            height: wp(20),
            marginTop: wp(1),
        
        },
        TextNametitle: {
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            color: Colors.neutral549,
            // textAlign: 'center',
        },
        TextDeatilsHomeCard: {
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            color: Colors.neutral549,
        },
        imagebottomCategories: {
            width: wp(90),
            height: wp(65),
            // backgroundColor: 'pink',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        },
        MainImageTop: {
            width: wp(90),
            height: wp(60),
            // backgroundColor: 'pink',
            alignSelf: 'center',
            borderRadius: 10,
        
        },
        Text1View: {
          alignSelf: 'center',
          width: wp(100),
          marginVertical:  wp(1),
        },
        TextDetails: {
         fontFamily: 'Inter-Regular',
         fontSize: 14,
         color: Colors.neutral549,
         lineHeight:20,
         letterSpacing: 1,
         marginTop: wp(2),
        
        },
        TextDetails2: {
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            color: Colors.neutral549,
            lineHeight:20,
            letterSpacing: 1,
            marginTop: wp(2),
        },
        MainViewImage: {
             width: wp(90),
             alignSelf: 'center',
            //  backgroundColor: 'pink',
             alignItems: 'center',
        },
        touchViewEmail: {
            width: wp(80),
            alignSelf: 'center',
            flexDirection: 'row',
            // marginTop: wp(5),
        },
        touchViewPhone: {
            width: wp(80),
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: wp(5),
        },
        TextEmailText: {
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            color: Colors.neutral549,
            top: wp(1),
            left: wp(3),
        },
        MainparentViewemailPhone: {
            width: wp(80),
            alignSelf: 'center',
            marginVertical: wp(10),
        },
        Textaboutus: {
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            color: Colors.neutral549,
        },
        Viewaboutus: {
            width: wp(90),
            alignSelf: 'center',
            alignItems: 'center',
            
        },
        ViewTextDetailsContact: {
            width: wp(90),
            alignSelf: 'center',
            marginVertical: wp(3),
        
        },
        Textdeatilscontact: {
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            color: Colors.neutral549,
            // textAlign: 'center',
            lineHeight: 17,
        },
        ButtonProfile: {
            
             alignSelf: 'center',
             marginTop: wp(2)
        },
        SignupFreeTextParent2: {
            width: wp(90),
            height: wp(50),
            // backgroundColor: 'pink',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: wp(5),
            justifyContent: 'space-around',
        },
        ParentViewTextInputProfile: {
            alignSelf: 'center',
            height: wp(50),
            // backgroundColor: 'pink',
            justifyContent: 'space-around',
            marginVertical: wp(5)
        },
        ButtonViewUpdate: {
           
                // backgroundColor: Colors.neutral551,
                width: wp(90),
                height: wp(14),
               borderRadius: 5,
               borderWidth: 1,
               borderColor: Colors.neutral551,
            //    alignItems: 'center',
               justifyContent: 'center',
               alignSelf: 'center',
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',

           
        },
        TextstyleUpdate: {
            color: Colors.neutral549,
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            left: wp(3),     
        },
        ParentViewTextInputUpdate: {
            alignSelf: 'center',
            height: wp(80),
            // backgroundColor: 'pink',
            justifyContent: 'space-around',
        },
        ButtonUpdatePassword:{
          // backgroundColor: Colors.neutral551,
          width: wp(90),
          height: wp(14),
    
         borderColor: Colors.neutral551,
         alignItems: 'center',
         justifyContent: 'center',
        //  marginTop: wp(5),
         alignSelf: 'center',
        },
        TouchMainflatluistdata12: {
            width: wp(90),
            height: wp(64),
            backgroundColor: Colors.neutral550,
            borderRadius: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
            margin: wp(2),
        },
        TouchMainflatluistdata13: {
            width: wp(90),
            height: wp(52),
            backgroundColor: Colors.neutral550,
            borderRadius: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
            margin: wp(2),
            // backgroundColor: 'pink',
        },
        TextParentCategory: {
            alignSelf: 'center',
            width: wp(80),
            // backgroundColor: 'brown',
            height: wp(15),
            justifyContent: 'center'
        },
        TextNamecategories: {
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            color: 'black',
            textAlign: 'center',
        },
        SearchContainer: {
            width: wp(90),
            height: hp(7),
            backgroundColor: Colors.neutral552,
            elevation: 5,
            shadowColor: Colors.neutral549,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
    
        
        },
        TextInputStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
            color: Colors.neutral551,
             left: wp(3.5),
            width: wp(70)
        },
        search_bar: {
            width: wp(90),
            alignSelf: 'center',
            marginVertical: wp(3),
        },
        MainViewIamgeSpash: {
            width: wp(90),
            height: wp(80),
            // backgroundColor: 'pink',
            alignSelf: 'center',
            marginVertical: wp(14),
        },
        TextBrowseSplash: {
            fontFamily: 'Inter-Bold',
            fontSize: 16,
            color: Colors.neutral549,
            
        },
        BrowseNewMedicalParentViewSplash: {
            width: wp(90),
            flexDirection: 'row',
            // backgroundColor: 'pink',
            alignSelf: 'center',
            justifyContent: 'space-between',
            
        },
        DetailsCardsplash: {
    
                alignItems: 'center',
                width: wp(90),
                alignSelf: 'center',
                // backgroundColor: 'pink'
        },
        TextDetailsForgetSplash: {
            color: 'black',
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            // textAlign: 'center',
            lineHeight: 20,

        },
        TextDeatilsHomeName: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 16,
            color: Colors.neutral549,
        },
        BackgroundImage: {
             width: wp(90),
             height: wp(120),
            //  backgroundColor: 'pink',
        },
        BackgroundImageView: {
        //    width: wp(100),
        //    marginTop: wp(15),
        flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'pink',
        

        },
        organ1: {
            width: wp(70),
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf:'center',
            
        },
        organ2: {
            width: wp(80),
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf:'center',
            marginTop: wp(5),
        },
        organ3: {
            width: wp(90),
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf:'center',
            marginTop: wp(5),
            

        },
        organ4: {
            width: wp(90),
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf:'center',
            marginTop: wp(5),
        },
        MainViewOrgainDetails: {
             flex: 1,
        },
        ViewImageOrgan: {
            width: wp(90),
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: wp(5),
        },
        ViewImageOrgandetails: {
         width: wp(90),
         alignSelf: 'center',

        },
        TextOrgan: {
            fontFamily: '',
            fontSize: 14,
            color: Colors.neutral551,
            // textAlign: 'center',
            lineHeight:20,
         letterSpacing: 1,
        },
        TouchCross: {
            width: wp(90),
            alignSelf: 'center',
        //  bottom: wp(5),
        marginTop: wp(2),

        },
        VideoView: {
            width: wp(85),
            height: hp(26),
            alignSelf: 'center',
            marginVertical: hp(5),
            borderRadius: 20,
            overflow:"hidden",
            justifyContent: 'center',
          //   backgroundColor: 'pink',
          },
          TouchMainflatluistdata14: {
            width: wp(90),
            // height: wp(64),
            backgroundColor: Colors.neutral550,
            // borderRadius: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
            // margin: wp(2),
            alignSelf: 'center',
        },
        TextParentData13: {
            alignSelf: 'center',
            width: wp(90),
            // backgroundColor: 'pink',
            height: wp(10),
            // marginTop: wp(1),
            left: wp(4),
        
        },
        TextDeatilsHomeCard12: {
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            color: Colors.neutral549,
        },

        organ5: {
            width: wp(85),
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf:'center',
            marginTop: wp(5),
        },
        imgwidth: {
            width: wp(90),
            height: wp(40),

        },
        Buttonterm: {
            alignSelf: 'center',
            marginTop: wp(20),
        },
        ButtonViewUpdate2: {
           
            // backgroundColor: Colors.neutral551,
            width: wp(90),
            height: wp(14),
           borderRadius: 5,
           borderWidth: 1,
           borderColor: Colors.neutral551,
        //    alignItems: 'center',
           justifyContent: 'center',
           alignSelf: 'center',
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center',
           marginVertical: wp(15),

       
    },
})