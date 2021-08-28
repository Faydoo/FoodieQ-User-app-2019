import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

import Colors from '../constants/colors';

const VendorItem = props => {
    let TouchableButton = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableButton = TouchableNativeFeedback;
    }

    return(
        <View style={styles.item}>
            <TouchableButton onPress={props.onSelect}>
                <ImageBackground source={{ uri: props.item.featuredImage }} style={styles.image}>
                    <Text style={styles.text} numberOfLines={1}>{props.item.name}</Text>
                </ImageBackground>
            </TouchableButton>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        paddingVertical: 4,
        color: Colors.white,
        backgroundColor: 'rgba(0,0,0,0.5)',
        textAlign: 'center'
    }
});

export default VendorItem;
