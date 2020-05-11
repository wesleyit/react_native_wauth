// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
// import {Icon} from 'react-native-elements';
// import styles from '../styles/theme';

// const B = props => <Text style={styles.common_bold}>{props.children}</Text>;

// export default class TapToAuthScreen extends Component {
//   componentDidMount() {
//     NfcManager.start();
//     NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
//       if (tag.id == '9D4D9B00180104E0') {
//         NfcManager.unregisterTagEvent().catch(() => 0);
//         this.props.navigation.navigate('accounts');
//       }
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
