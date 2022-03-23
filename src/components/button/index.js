import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles'

const Button = ({
    title,
    backgroundColor,
    textColor,
    borderColor,
    onPress
}) => {
    return (
        <Pressable style={[styles.container,{backgroundColor:backgroundColor,borderColor:borderColor}]} onPress={onPress}>
            <Text style={[styles.title,{color:textColor}]}>{title}</Text>
        </Pressable>
    );
}

export default Button;
