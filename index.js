/**
 * @format
 */

import { AppRegistry, TouchableOpacity, Text, TextInput } from 'react-native';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';
import { enableScreens } from 'react-native-screens';
import App from './src/App';

if (Text.defaultProps == null) {
    Text.defaultProps = {};
}
if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {
    ...(TextInput.defaultProps || {}),
    allowFontScaling: false,
};
TouchableOpacity.defaultProps = {
    activeOpacity: 0.6,
};

AppRegistry.registerComponent(appName, () => App);

EStyleSheet.build({ $outline: 0 });

enableScreens(true);
