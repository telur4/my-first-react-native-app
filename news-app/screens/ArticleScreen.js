import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import ClipButton from '../components/ClipButton';
import Loading from '../components/Loading';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen({ route }) {
  const { article } = route.params;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { clips } = user;

  function isClipped() {
    return clips.some((clip) => clip.url === article.url);
  }

  function toggleClip() {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView
        source={{ uri: article.url }}
        renderLoading={() => {
          Platform.OS === 'ios' && <Loading />;
        }}
      />
    </SafeAreaView>
  );
}
