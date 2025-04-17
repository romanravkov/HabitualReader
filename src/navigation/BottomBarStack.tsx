import React from 'react';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import TabBar from 'src/components/TabBar';
import BooksStack, { BooksStackParamList } from 'src/navigation/BooksStack.tsx';
import { STACKS } from 'src/navigation/constants.ts';
import HomeStack, { HomeStackParamList } from 'src/navigation/HomeStack.tsx';
import MoreStack, { MoreStackParamList } from 'src/navigation/MoreStack.tsx';
import { SubNavigator } from 'src/navigation/types.ts';

export type BottomBarStackParamList = {
    [STACKS.HOME_STACK.StackName]: SubNavigator<HomeStackParamList>;
    [STACKS.BOOKS_STACK.StackName]: SubNavigator<BooksStackParamList>;
    [STACKS.MORE_STACK.StackName]: SubNavigator<MoreStackParamList>;
};
export type BottomBarStackNavigationProps = BottomTabScreenProps<BottomBarStackParamList>;

const TabStack = createBottomTabNavigator<BottomBarStackParamList>();

export default function BottomBarStack() {
    return (
        <TabStack.Navigator
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <TabStack.Screen name={STACKS.HOME_STACK.StackName} component={HomeStack} />
            <TabStack.Screen name={STACKS.BOOKS_STACK.StackName} component={BooksStack} />
            <TabStack.Screen name={STACKS.MORE_STACK.StackName} component={MoreStack} />
        </TabStack.Navigator>
    );
}
