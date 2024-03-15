import { StyleSheet, View } from 'react-native';
import Game from './src/scripts/Game'
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#3498db', '#ffffff']}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Game />
      </View>
    </LinearGradient>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
