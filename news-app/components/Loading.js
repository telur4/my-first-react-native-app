import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Loading() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <ActivityIndicator size="large" />}
    </View>
  );
}

export default Loading;
