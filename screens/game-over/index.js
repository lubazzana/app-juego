import { Button, Dimensions, Image, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Card } from "../../components/index";
import { styles } from "./styles";
import theme from "../../constants/theme";

const GameOver = ({rounds, choice, onRestart}) => {
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get("screen");
        return dim.height >= dim.width;
    };

    const statePortrait = () => {
        setIsPortrait(onPortrait);
    };

    useEffect(() => {
        const dimEvent = Dimensions.addEventListener('change', statePortrait());
        return () => {
            dimEvent.remove();
        };
    });

    return(
        <ScrollView style={styles.scrollLayout}>
            <View style={isPortrait ? styles.container : styles.containerLandscape}>
                <Image 
                    source={{
                        uri: 'https://media.istockphoto.com/vectors/game-over-vector-background-emoticon-with-glitch-effect-cyber-gamer-vector-id1182665410?k=20&m=1182665410&s=612x612&w=0&h=-R6phO5biw_KFDY_nVl1e4HLrxujGbMFIUqUIQOtCas='
                    }}
                    style={isPortrait ? styles.image : styles.imageLandscape}
                    resizeMode='contain'
                />
                <Card style={isPortrait ? styles.result : styles.resultLandscape}>
                    <Text>Intentos: {rounds}</Text>
                    <Text>El número era: {choice}</Text>
                </Card>
                <Button 
                    title="Reiniciar" 
                    onPress={onRestart} 
                    color={theme.colors.accent}
                />
            </View>
        </ScrollView>
    );
};

export default GameOver;