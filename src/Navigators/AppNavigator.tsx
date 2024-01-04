import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SplashScreen from '@screen/SplashScreen';
import {navigationRef} from './RootNavigation';
import RouteKey from './RouteKey';
import {MainNavigator} from './StackNavigation';
import {ImageBackground, StyleSheet} from 'react-native';
import {colors, Images} from '../Themes';

function AppNavigation(): React.ReactElement {
  const appState: string = RouteKey.MainStack;
  function renderStack(): React.ReactNode {
    switch (appState) {
      case RouteKey.MainStack:
        return <MainNavigator />;
      default:
        return <SplashScreen />;
    }
  }

  return (
    <ImageBackground
      source={Images.background}
      resizeMode="cover"
      style={styles.image}>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            ...DarkTheme.colors,
            background: colors.transparent,
          },
        }}
        ref={navigationRef}>
        {renderStack()}
      </NavigationContainer>
    </ImageBackground>
  );
}

export default AppNavigation;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    flexGrow: 1,
    backgroundColor: colors.inkDarkest,
    justifyContent: 'center',
  },
});
