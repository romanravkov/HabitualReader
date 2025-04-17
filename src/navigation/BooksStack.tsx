import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import AddBook from 'src/modules/Books/pages/AddBook/AddBook.tsx';
import BooksList from 'src/modules/Books/pages/BooksList/BooksList.tsx';
import { STACKS } from 'src/navigation/constants';

export type BooksStackParamList = {
    [STACKS.BOOKS_STACK.BooksList]: any;
    [STACKS.BOOKS_STACK.AddBook]: any;
};
export type BooksStackNavigationProps = NativeStackScreenProps<BooksStackParamList>;

const Stack = createNativeStackNavigator<BooksStackParamList>();

export default function BooksStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACKS.BOOKS_STACK.BooksList} component={BooksList} />
            <Stack.Screen
                options={{
                    presentation: 'modal',
                }}
                name={STACKS.BOOKS_STACK.AddBook}
                component={AddBook}
            />
        </Stack.Navigator>
    );
}
