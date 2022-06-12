import { SafeAreaView, View } from 'react-native';

import GameScreen from './screens/game-screen';
import { Header } from './components/index';
import StartGame from './screens/start-game';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={setUserNumber} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número"/>
        {content}
      </View>
    </SafeAreaView>
  );
}
