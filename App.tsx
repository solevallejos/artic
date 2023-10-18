import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationHeader from './src/components/NavigationHeader';
import {THEME} from './assets/theme/theme';
import Home from './src/screens/Home';
import Artwork from './src/screens/Artwork';
import Favorites from './src/screens/Favorites';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider style={styles.safeAreaBg}>
      <StatusBar hidden={false} backgroundColor={THEME.COLORS.BACKGROUND} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: ({navigation}) => {
                return <NavigationHeader />;
              },
            }}>
            <Stack.Screen
              name="HomeScreen"
              component={Home}
            />
            <Stack.Screen name="Artwork" component={Artwork} />
            <Stack.Screen name="Favorites" component={Favorites} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaBg: {
    padding: THEME.GRID.GUTTER,
    backgroundColor: THEME.COLORS.BACKGROUND
  },
});

export default App;