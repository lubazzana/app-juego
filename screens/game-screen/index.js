import { Button, Text, View } from 'react-native';
import { Card, CustomText, NumberContainer } from '../../components/index';
import React, { useState } from 'react';

import { styles } from './styles';
import theme from "../../constants/theme";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const GameScreen = ({userOptions}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 99, userOptions));

    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>La suposición del oponente</CustomText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => null} color={theme.colors.primary} />
                <Button title="Mayor" onPress={() => null} color={theme.colors.primary} />
            </Card>
        </View>
    )
}

export default GameScreen;