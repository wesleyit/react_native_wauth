import React from 'react';
import {View} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import S from '../styles/theme';

function Template({navigation}) {
  return (
    <View style={[S.flex_100, S.flex_col, S.pad_20]}>
      <Text style={[S.txt_big, S.txt_bold, S.fg_dark]}>
        This is the Template
      </Text>
      <Button
        title="Click me, please :D"
        buttonStyle={[S.h_100, S.bg_dark]}
        titleStyle={[S.txt_bold, S.txt_medium, S.fg_light]}
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

export default Template;
