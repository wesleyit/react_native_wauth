import React from 'react';
import {View} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import S from '../styles/theme';

function Welcome({navigation}) {
  return (
    <View style={[S.flex_100, S.flex_col]}>
      <View style={[S.flex_25, S.bg_dark]} />
      <View style={[S.flex_50, S.bg_navy]} />
      <View style={[S.flex_25, S.bg_dark]} />
    </View>
  );
}

export default Welcome;
