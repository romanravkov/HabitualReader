import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { STACKS } from 'src/navigation/constants';
import HomeStack, { HomeStackParamList } from 'src/navigation/HomeStack.tsx';
import { SubNavigator } from 'src/navigation/types.ts';

export type RootStackParamList = {
    [STACKS.HomeStack]: SubNavigator<HomeStackParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACKS.HomeStack} component={HomeStack} />
        </Stack.Navigator>
    );
}
