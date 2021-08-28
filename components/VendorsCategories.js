import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const VendorsCategories = props => {
    return(
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContainer}>
                <Text onPress={() => {}} style={styles.category}>Alles</Text>
                <Text onPress={() => {}} style={styles.category}>Terrasje pakken</Text>
                <Text onPress={() => {}} style={styles.category}>Restaurant</Text>
                <Text onPress={() => {}} style={styles.category}>Cafe</Text>
                <Text onPress={() => {}} style={styles.category}>Snackbar</Text>
                <Text onPress={() => {}} style={styles.category}>Bistro</Text>
                <Text onPress={() => {}} style={styles.category}>Winkel</Text>
                <Text onPress={() => {}} style={styles.category}>Bar</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40
    },
    categoryContainer: {
        backgroundColor: '#ccc',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    category: {
        fontFamily: 'open-sans-semi-bold',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15
    }
});

export default VendorsCategories;