import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/screens/';

AppRegistry.registerComponent(appName, () => Router);
