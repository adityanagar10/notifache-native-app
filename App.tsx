import { theme } from './src/theme';
import Home from './src/screens/home/home';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, View,SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
   <ThemeProvider theme={theme}>
     <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
      <View style={styles.container}>
        <Home />
        <ExpoStatusBar style="auto" />
      </View>
    </SafeAreaView>
   </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
