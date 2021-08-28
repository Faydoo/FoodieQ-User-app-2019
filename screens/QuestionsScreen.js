import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';

const QuestionSwitch = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
            <Switch trackColor={trackColor}
                thumbColor={Colors.purple}
                value={props.value}
                onValueChange={props.onchange}
            />
        </View>
    );

};

const QuestionsScreen = props => {
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);

    useEffect(() => {
        if (question1 && question2 && question3 && question4 && question5) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    });

    return(
        <View style={DefaultStyles.screen}>
            <QuestionSwitch label="Hier komt vraag nummer 1" value={question1} onchange={value => setQuestion1(value)} />
            <QuestionSwitch label="Hier komt vraag nummer 2" value={question2} onchange={value => setQuestion2(value)} />
            <QuestionSwitch label="Hier komt vraag nummer 3" value={question3} onchange={value => setQuestion3(value)} />
            <QuestionSwitch label="Hier komt vraag nummer 4" value={question4} onchange={value => setQuestion4(value)} />
            <QuestionSwitch label="Hier komt vraag nummer 5" value={question5} onchange={value => setQuestion5(value)} />
        </View>
    );
};

const trackColor = {
    false: '#ccc',
    true: Colors.orange
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10,
        width: '80%'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
});

export default QuestionsScreen;
