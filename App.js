import { ActivityIndicator, SafeAreaView, View } from 'react-native';

import GameScreen from './screens/game-screen';
import { Header } from './components/index';
import StartGame from './screens/start-game';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    'source-sans': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'source-sans-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'source-sans-semibold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    'source-sans-black': require('./assets/fonts/SourceSansPro-Black.ttf'),
    'source-sans-light': require('./assets/fonts/SourceSansPro-Light.ttf'),
    'source-sans-italic': require('./assets/fonts/SourceSansPro-Italic.ttf'),
  });
  const [userNumber, setUserNumber] = useState();

  if (!loaded) {
    return <ActivityIndicator size="large" color='#212121'/>;
  }


  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="ADIVINA EL NÚMERO"/>
        {content}
      </View>
    </SafeAreaView>
  );
}
