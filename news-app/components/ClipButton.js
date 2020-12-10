import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import ClipScreen from '../screens/ClipScreen';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

function ClipButton({ onPress, enabled }) {
  const name = enabled ? 'bookmark' : 'bookmark-o';

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
}

export default ClipButton;
