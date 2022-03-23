import React from 'react';
import {Text, Image, View,ImageBackground } from 'react-native';
import AppImages from '../../../assets/images'
import Button from '../../../components/button';
import styles from './styles';
import color from '../../../utils/color';
import string from '../../../utils/string';

const IntroScreen = ({
    navigation,
}) => {
    const handleSignupClick = () =>{
        alert('In Development')
    }
    const handleLoginClick = () =>{
        alert('In Development')
    }
    return(
        <View style={styles.vContainer}>
           <Image source={AppImages.bg_intro} style={styles.bgIntro}/>
            <Image source={AppImages.ic_grey_logo} style={styles.iGreyLogo}/>
           <View style={styles.buttonContainer}>
            <Button textColor={color.primary} backgroundColor={color.white} borderColor={color.white} title={string.login} onPress={handleLoginClick}/>
            <Button textColor={color.white} backgroundColor={color.primary} borderColor={color.white} title={string.signup} onPress={handleSignupClick}/>
           </View>

        </View>
    );
    
}
export default IntroScreen;
