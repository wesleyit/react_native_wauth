import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import S from '../styles/theme';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
      console.log('Opaaaa');
    }, 2000);
  });
  return (
    <View style={[S.flex_100, S.flex_col]}>
      <View style={[S.flex_row, S.flex_20]} />
      <View style={[S.flex_row, S.flex_40, S.center]}>
        <Icon
          name="hand-spock"
          type="font-awesome-5"
          iconStyle={[S.splash_icon, S.fg_dark]}
        />
      </View>
      <View style={[S.flex_row, S.flex_20, S.center]}>
        <Text style={[S.splash_text, S.fg_dark]}>W A U T H</Text>
      </View>
      <View style={[S.flex_row, S.flex_20]} />
    </View>
  );
}

export default Splash;
