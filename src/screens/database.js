// import React, {Component} from 'react';
// import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
// import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
// import {Icon} from 'react-native-elements';
// import styles from '../styles/theme';

// const B = props => <Text style={styles.common_bold}>{props.children}</Text>;

// // Functions for saving and restoring data from DB
// function saveCreds(key, value) {
//   AsyncStorage.setItem(key, value);
// }
// function restoreCreds(key) {
//   return AsyncStorage.getItem(key);
// }
// export default class FirstScan extends Component {
//   componentDidMount() {
//     NfcManager.start();
//     NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
//       NfcManager.unregisterTagEvent().catch(() => 0);
//       console.log('Writing the tag uid ', tag.id);
//       saveCreds('uid', tag.id);
//       console.log('Written:');
//       restoreCreds('uid').then(console.log);
//       this.props.navigation.navigate('sparkinfo', {tag_id: tag.id});
//     });
//   }

//   componentWillUnmount() {
//     NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
//     NfcManager.unregisterTagEvent().catch(() => 0);
//   }

//   start_nfc = async () => {
//     try {
//       await NfcManager.registerTagEvent();
//     } catch (ex) {
//       console.warn('ex', ex);
//       NfcManager.unregisterTagEvent().catch(() => 0);
//     }
//   };

//   render() {
//     return (
//       <View style={[styles.flex_container]} onLayout={this.start_nfc}>
//         <Text style={[styles.common_component, styles.welcome_title]}>
//           Tap your Spark
//         </Text>
//         <Icon
//           name={'access-point'}
//           type={'material-community'}
//           size={300}
//           color={'#444'}
//         />
//         <Text style={[styles.common_component, styles.welcome_text]}>
//           {'\n'}As this is the first time you open me, it is necessary to create
//           your profile.{'\n\n'}I will do that by scanning your unique Spark ID
//           and using it as a cryptographic key to protect your account codes.
//           {'\n'}
//         </Text>
//         <Text
//           onPress={() =>
//             this.props.navigation.navigate('sparkinfo', {tag_id: '12345678910'})
//           }
//           style={[styles.common_component, styles.common_button]}>
//           Mock Tapping
//         </Text>
//       </View>
//     );
//   }
// }
