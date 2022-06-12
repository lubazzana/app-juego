import { Button, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, Input } from '../../components/index';
import React, { useState } from 'react';

import { styles } from './styles';
import theme from '../../constants/theme';

const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const onHandlerChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.subtitle}>Elige un número</Text>
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
                            color={theme.colors.primary}
                            onPress={() => null}
                        />
                        <Button 
                            title="Confirmar" 
                            color={theme.colors.secondary}
                            onPress={() => null}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGame;