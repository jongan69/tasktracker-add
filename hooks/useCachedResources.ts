import { Ionicons } from '@expo/vector-icons';

import * as Font from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

import * as React from 'react';

import * as firebase from 'firebase';

import apiKeys from '../constants/apiKeys';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        if (!firebase.apps.length) { firebase.initializeApp(apiKeys.FirebaseConfig); }
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
