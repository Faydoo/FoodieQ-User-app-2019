import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

const VendorImageCarousel = props => {
    return(    
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageContainer}>
            {
                props.images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} resizeMode="cover" style={styles.image}/>
                ))
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'space-evenly',
    },
    image: {
        width: 200,
        height: 150,
        marginHorizontal: 10
    }
});

export default VendorImageCarousel;
