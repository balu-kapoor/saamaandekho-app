import React, { useEffect, useRef } from 'react';
import { StyleSheet, BackHandler, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true; // Prevents the default behavior (closing the app)
      }
      return false;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <WebView
        ref={webViewRef}
        style={styles.container}
        source={{ uri: 'https://www.saamaandekho.com/' }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
