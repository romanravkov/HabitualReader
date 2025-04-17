import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme } from '@react-navigation/native';

import BookItem from 'src/modules/Books/pages/BooksList/components/BookItem.tsx';
import BooksListHeader from 'src/modules/Books/pages/BooksList/components/BooksListHeader.tsx';
import EmptyList from 'src/modules/Books/pages/BooksList/components/EmptyList.tsx';
import { useAppSelector } from 'src/store';
import { IBook } from 'src/store/reducers/booksReducer.ts';
import { ThemeType } from 'src/styles/theme.ts';

const keyExtractor = (item: IBook) => String(item.id);

export default function BooksList() {
    const theme = useTheme();
    const styles = getStyles(theme);
    const books = useAppSelector(state => state.books);

    const renderItem = useCallback(({ item }: { item: IBook }) => {
        return <BookItem book={item} />;
    }, []);

    return (
        <View style={styles.container}>
            <BooksListHeader />
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListEmptyComponent={EmptyList}
                contentContainerStyle={styles.flatList}
            />
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
