import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Text from 'src/components/Text';
import BookDetailsHeader from 'src/modules/Books/pages/BookDetails/components/BookDetailsHeader.tsx';
import { BooksStackNavigationProps } from 'src/navigation/BooksStack.tsx';
import { RootStackParamList } from 'src/navigation/RootStack.tsx';
import { useAppSelector } from 'src/store';
import { IBook } from 'src/store/reducers/booksReducer.ts';
import { ThemeType } from 'src/styles/theme.ts';

export type BookDetailsNavigationProps = NativeStackScreenProps<RootStackParamList, 'BookDetails'>;

export default function BookDetails() {
    const navigation = useNavigation<BooksStackNavigationProps['navigation']>();
    const { params } = useRoute<BookDetailsNavigationProps['route']>();
    const book = useAppSelector(state => state.books.find(el => el.id === params.id)) as IBook;

    const theme = useTheme();
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <BookDetailsHeader />
            <Text>Name: {book.name}</Text>
            <Text>Author: {book.author}</Text>
            <Text>Pages: {book.pages}</Text>
            <Text>Description: {book.description}</Text>
            <Text>Progress: {book.progress}</Text>
        </View>
    );
}

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        flatList: {
            paddingHorizontal: 16,
            gap: 16,
        },
    });
