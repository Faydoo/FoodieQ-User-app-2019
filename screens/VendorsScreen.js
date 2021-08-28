import React,{ useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as vendorActions from '../store/actions/vendors';
import DefaultStyles from '../constants/default-styles';
import VendorsHeader from '../components/VendorsHeader';
import VendorsCategories from '../components/VendorsCategories';
import VendorItem from '../components/VendorItem';
import Colors from '../constants/colors';

const VendorsScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const vendors = useSelector(state => state.vendors.vendors);
    const dispatch = useDispatch();

    const loadVendorHandler = useCallback(async () => {
        // console.log('Nu werkt het!');
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(vendorActions.fetchVendors());
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch,setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadVendorHandler);

        return () => {
            willFocusSub.remove();
        };
    }, [loadVendorHandler]);

    useEffect(() => {
        loadVendorHandler();
    }, [dispatch, loadVendorHandler]);

    const renderVendorItem = itemData => {
        return <VendorItem item={itemData.item}
        onSelect={() => {
            props.navigation.navigate({
                routeName: 'VendorDetails',
                params: { vendorId: itemData.item.id }
            });
        }}/>
    };

    const headerTitle = 'Restaurants in Zwolle';

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
                <Button
                    title="Opnieuw proberen"
                    onPress={loadVendorHandler}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" collor={Colors.primary} />
            </View>
        );
    }
  
    return(
        <View style={DefaultStyles.screen}>
            <VendorsHeader title={headerTitle}/>
            <VendorsCategories />
            <View style={styles.flatListContainer}>
                <FlatList     
                    keyExtractor={(item, index) => item.id}
                    data={vendors}
                    renderItem={renderVendorItem}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListContainer: {
        flex: 1,
        marginTop: 5
    }
});

export default VendorsScreen;
