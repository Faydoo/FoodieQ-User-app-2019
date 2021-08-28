import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MainButton from '../components/MainButton';

const AvailabilityComponent = props => {
    const renderTimeSlotItem = itemData => {
        return (
            <MainButton onPress={props.onSelectTimeSlot.bind(this, itemData.item.vendor, itemData.item.id)}>
                Reserveer voor {itemData.item.noOfPeople } personen {itemData.item.startTime} - {itemData.item.endTime}
            </MainButton>
        );
    };    

    if (props.timeSlots.length === 0) {
        return (
            <MainButton onPress={() => {}}>
                Aanvragen voor 4p, 2 huishoudens 17:00 - 22:00
            </MainButton>
        );
    }

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={props.timeSlots}
                keyExtractor={(item, index) => item.id}
                renderItem={renderTimeSlotItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        flexGrow: 1
    }
});

export default AvailabilityComponent;
