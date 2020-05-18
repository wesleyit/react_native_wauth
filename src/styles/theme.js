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
  bottom_center: {alignItems: 'center', justifyContent: 'flex-end'},
  bottom_left: {alignItems: 'flex-start', justifyContent: 'flex-end'},

  // Margins and Padding
  pad_10: {padding: 10},
  pad_20: {padding: 20},

  // Foreground and Backgrounds for this pallete
  fg_dark: {color: '#333'},
  fg_medium: {color: '#999'},
  fg_light: {color: '#EEE'},
  bg_dark: {backgroundColor: '#333'},
  bg_medium: {backgroundColor: '#AAA'},
  bg_light: {backgroundColor: '#EEE'},
  fg_navy: {color: '#33A'},
  bg_navy: {backgroundColor: '#33A'},

  // Text sizes and formating
  txt_small: {fontSize: 20},
  txt_medium: {fontSize: 30},
  txt_big: {fontSize: 50},
  txt_huge: {fontSize: 100},
  txt_bold: {fontWeight: 'bold'},

  // Heights and Widths
  h_10: {height: 10},
  h_20: {height: 20},
  h_30: {height: 30},
  h_40: {height: 40},
  h_50: {height: 50},
  h_60: {height: 60},
  h_70: {height: 70},
  h_100: {height: 100},
  w_10: {width: 10},
  w_20: {width: 20},
  w_30: {width: 30},
  w_40: {width: 40},
  w_50: {width: 50},
  w_60: {width: 60},
  w_70: {width: 70},
  w_100: {width: 100},

  // SplashScreen Items
  splash_icon: {
    fontSize: 200,
  },
  splash_text: {
    fontSize: 50,
  },
});
