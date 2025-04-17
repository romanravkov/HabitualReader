import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import BookDetails from 'src/modules/Books/pages/BookDetails/BookDetails.tsx';
import BottomBarStack, { BottomBarStackParamList } from 'src/navigation/BottomBarStack.tsx';
import { STACKS } from 'src/navigation/constants';
import { SubNavigator } from 'src/navigation/types.ts';
import { IBook } from 'src/store/reducers/booksReducer.ts';

export type RootStackParamList = {
    [STACKS.BOTTOM_BAR_STACK.StackName]: SubNavigator<BottomBarStackParamList>;
    [STACKS.ROOT_STACK.BookDetails]: {
        id: IBook['id'];
    };
};
export type RootStackNavigationProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACKS.BOTTOM_BAR_STACK.StackName} component={BottomBarStack} />
            <Stack.Screen name={STACKS.ROOT_STACK.BookDetails} component={BookDetails} />
        </Stack.Navigator>
    );
}
