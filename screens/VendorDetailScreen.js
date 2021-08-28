import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DefaultStyles from '../constants/default-styles';
import VendorImageCarousel from '../components/VendorImageCarousel';
import Colors from '../constants/colors';

const VendorDetailScreen = props => {
    const [noOfPeople, setNoOfPeople] = useState('2');
    const vendorId = props.navigation.getParam('vendorId');
    const selectedVendor = useSelector(state => state.vendors.vendors.find(vendor => vendor.id === vendorId));

    const dispatch = useDispatch();
       
    return(
        <View style={DefaultStyles.screen}>
            <View style={styles.carouselContainer}>
                <VendorImageCarousel images={selectedVendor.images} />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>{selectedVendor.name}</Text>
                <View style={styles.noOfPeopleContainer}>
                    <View style={styles.pickerContainer}>
                        <Picker selectedValue={noOfPeople} style={styles.picker} onValueChange={(value, index) => setNoOfPeople(value)}>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>
                    <Text style={styles.text}>Aantal personen</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        marginVertical: 15
    },
    container: {
        marginHorizontal: 10
    },
    noOfPeopleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    pickerContainer: {
        borderRadius: 20,
        overflow: 'hidden'
    },
    picker: {
        flex: 1,
        height: 35,
        width: 100,
        color: Colors.white,
        backgroundColor: Colors.purple
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        marginBottom: 20
    }
});

export default VendorDetailScreen;