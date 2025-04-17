import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import Home from 'src/modules/Home/Home.tsx';
import { BooksStackParamList } from 'src/navigation/BooksStack.tsx';
import { STACKS } from 'src/navigation/constants';

export type HomeStackParamList = {
    [STACKS.HOME_STACK.Home]: object;
};
export type HomeStackNavigationProps = NativeStackScreenProps<BooksStackParamList>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={STACKS.HOME_STACK.Home} component={Home} />
        </Stack.Navigator>
    );
}
