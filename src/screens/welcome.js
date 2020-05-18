import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import S from '../styles/theme';

function Welcome({navigation}) {
  return (
    <View style={[S.flex_100, S.flex_col, S.pad_20]}>
      <View style={[S.flex_20, S.bottom_left]}>
        <Text style={[S.txt_big, S.txt_bold, S.fg_dark]}>
          Let's dive in WAuth!
        </Text>
      </View>

      <View style={[S.flex_60]}>
        <Text style={[S.txt_medium, S.fg_dark]}>
          {'\n\n'}
          This app can be used to generate one-time passwords for Multi Factor
          Authentication applying a security key from your NFC Implant.
          {'\n\n'}
          First, you need to register your NFC Implant and PIN Code.
          {'\n\n'}
        </Text>
      </View>

      <View style={[S.flex_20]}>
        <Button
          title="Scan my chip :D"
          buttonStyle={[S.h_100, S.bg_dark]}
          titleStyle={[S.txt_bold, S.txt_medium, S.fg_light]}
          onPress={() => navigation.navigate('Tapume')}
        />
      </View>
    </View>
  );
}

export default Welcome;
