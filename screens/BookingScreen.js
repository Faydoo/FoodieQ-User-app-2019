import React, { useReducer, useCallback } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';

import Input from '../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        };

        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }

    return state;
};

const BookingScreen = props => {
    const vendorId = props.navigation.getParam('vendorId');
    const timeSlotId = props.navigation.getParam('timeSlotId');

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            name: '',
            telnum: '',
            mailaddress: '',
            comments: ''
        },
        inputValidities: {
            name: false,
            telnum: false,
            mailaddress: false,
            comments: true
        },
        formIsValid: false
    });
 
    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
            <ScrollView>
                <View style={styles.form}>
                    <Input
                        id="name"
                        label="Naam"
                        required
                        errorText="Voer uw volledige naam in"
                        keyboardType="default"
                        returnKeyType="done"
                        onInputChange={inputChangeHandler}
                        initialValue={formState.inputValues.name}
                        initiallyValid={formState.inputValidities.name}
                    />
                    <Input
                        id="telnum"
                        label="Telefoonnummer"
                        required
                        errorText="Voer een geldig telefoonnummer in"
                        keyboardType="decimal-pad"
                        returnKeyType="done"
                        onInputChange={inputChangeHandler}
                        initialValue={formState.inputValues.telnum}
                        initiallyValid={formState.inputValidities.telnum}
                    />
                    <Input
                        id="mailaddress"
                        label="E-mailadres"
                        required
                        email
                        errorText="Voer een geldig e-mailadres in"
                        keyboardType="email-address"
                        returnKeyType="done"
                        onInputChange={inputChangeHandler}
                        initialValue={formState.inputValues.mailaddress}
                        initiallyValid={formState.inputValidities.mailaddress}
                    />
                    <Input
                        id="comments"
                        label="Opmerkingen"
                        errorText=""
                        keyboardType="default"
                        returnKeyType="done"
                        onInputChange={inputChangeHandler}
                        initialValue={formState.inputValues.comments}
                        initiallyValid={formState.inputValidities.comments}
                        multiline
                        numberOfLines={4}
                    />            
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 20
    }    
});

export default BookingScreen;