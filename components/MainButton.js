import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} {...props}>
                <View style={styles.button}>
                    <Text numberOfLines={1} style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.purple,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;
