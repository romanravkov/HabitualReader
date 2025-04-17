import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme } from '@react-navigation/native';

import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { ThemeType } from 'src/styles/theme.ts';

export default function More() {
    const theme = useTheme();
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <Icon name={'more'} />
            <Text>More screen</Text>
        </View>
    );
}

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
    });
