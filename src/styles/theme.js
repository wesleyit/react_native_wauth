import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Flex Default sizes for layouts
  flex_100: {flex: 100},
  flex_80: {flex: 80},
  flex_75: {flex: 75},
  flex_70: {flex: 70},
  flex_60: {flex: 60},
  flex_50: {flex: 50},
  flex_40: {flex: 40},
  flex_30: {flex: 30},
  flex_25: {flex: 25},
  flex_20: {flex: 20},
  flex_15: {flex: 15},
  flex_10: {flex: 10},

  // Flex Alignment and Distribution options
  flex_col: {flexDirection: 'column'},
  flex_row: {flexDirection: 'row'},
  center: {alignItems: 'center', justifyContent: 'center'},

  // SplashScreen Items
  splash_icon: {
    color: '#666',
    fontSize: 200,
    alignSelf: 'center',
  },
  splash_text: {
    color: '#666',
    fontSize: 50,
    alignSelf: 'center',
  },
});
