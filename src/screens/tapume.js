import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import S from '../styles/theme';
import {getData, storeData} from '../libs/utils';

function playData() {
  storeData('teste', '12345678910').then(() => {
    console.log('The write promisse is resolved');
    getData('teste').then(value => {
      console.log('The read promisse is resolved');
      console.log('It returned ' + value);
    });
  });
}

function Tapume({navigation}) {
  return (
    <View style={[S.flex_100, S.flex_col, S.pad_20]}>
      <Text style={[S.txt_big, S.txt_bold, S.fg_dark]}>
        You should not be here.
      </Text>
      <Button
        title="Get out."
        buttonStyle={[S.h_100, S.bg_dark]}
        titleStyle={[S.txt_bold, S.txt_medium, S.fg_light]}
        onPress={playData}
      />
    </View>
  );
}

export default Tapume;
