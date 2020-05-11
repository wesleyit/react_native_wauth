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
  self_center: {alignSelf: 'center'},
  center: {alignItems: 'center', justifyContent: 'center'},
  top_center: {alignItems: 'center', justifyContent: 'flex-start'},
  top_left: {alignItems: 'flex-start', justifyContent: 'flex-start'},

  // Margins and Padding
  pad_10: {padding: 10},
  pad_20: {padding: 20},

  // Foreground and Backgrounds for this pallete
  fg_dark: {color: '#666'},
  fg_medium: {color: '#999'},
  fg_light: {color: '#EEE'},
  bg_dark: {backgroundColor: '#666'},
  bg_medium: {backgroundColor: '#AAA'},
  bg_light: {backgroundColor: '#EEE'},
  fg_navy: {color: '#33A'},
  bg_navy: {backgroundColor: '#33A'},

  // SplashScreen Items
  splash_icon: {
    fontSize: 200,
  },
  splash_text: {
    fontSize: 50,
  },
});
