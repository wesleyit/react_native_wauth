import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import S from '../styles/theme';

function Welcome({navigation}) {
  return (
    <View style={[S.flex_100, S.flex_col, S.center]}>
      <Text>Welcome, brother.</Text>
    </View>
  );
}

export default Welcome;
