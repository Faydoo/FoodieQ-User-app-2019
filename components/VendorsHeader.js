import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const VendorsHeader = props => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/zwolle.jpeg')} style={styles.image}>
                <Text style={styles.text}>{props.title}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '25%'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white'
    }
});

export default VendorsHeader;