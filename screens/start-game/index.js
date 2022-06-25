import { Button, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CustomText, Input, NumberContainer } from '../../components/index';
import React, { useState } from 'react';

import { styles } from './styles';
import theme from '../../constants/theme';

const StartGame = ({onStartGame}) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const onHandlerChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }

    const onHandlerReset = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    
    const onHandlerConfirm = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    }

    const confirmedOutput = confirmed ? (
        <Card style={styles.inputContainer}>
            <CustomText style={styles.cardTitle}>TU SELECCIÓN</CustomText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button 
                title="Empezar juego"
                onPress={() => onStartGame(selectedNumber)} 
                color={theme.colors.primary} 
            />
        </Card>
    ) : null;

    return (
        <KeyboardAvoidingView 
            style={styles.containerGeneric} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={30}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <ScrollView style={styles.containerGeneric}>
                    <View style={styles.screen}>
                        <CustomText style={styles.title}>Comenzar Juego</CustomText>
                        <Card style={styles.inputContainer}>
                            <CustomText style={styles.subtitle}>Elige un número</CustomText>
                            <Input 
                                placeholder="11" 
                                keyboardType="numeric"
                                maxLength={2}
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor={theme.colors.placeholder}  
                                style={styles.input}
                                value={enteredValue}
                                onChangeText={(text) => onHandlerChangeText(text)}
                            />
                            <View style={styles.buttonContainer}>
                                <Button
                                    title="Limpiar" 
                                    color={theme.colors.accent}
                                    onPress={() => onHandlerReset()}
                                />
                                <Button 
                                    title="Confirmar" 
                                    color={theme.colors.primary}
                                    onPress={() => onHandlerConfirm()}
                                />
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default StartGame;