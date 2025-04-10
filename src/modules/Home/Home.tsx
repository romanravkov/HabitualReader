import React from 'react';
import {
    View,
} from 'react-native';
import Text from 'src/components/Text';
import Icon from 'src/components/Icon';

export default function Home() {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Icon name={'home'} />
            <Text>Home screen</Text>
        </View>
    );
}
