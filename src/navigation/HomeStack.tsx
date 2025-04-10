import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PAGES } from 'src/navigation/constants';
import Home from 'src/modules/Home/Home.tsx';

export type HomeStackParamList = {
    [PAGES.HOME]: object;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={PAGES.HOME} component={Home} />
        </Stack.Navigator>
    );
}
