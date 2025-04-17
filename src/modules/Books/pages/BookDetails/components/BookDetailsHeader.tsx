import React, { useCallback, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { BookDetailsNavigationProps } from 'src/modules/Books/pages/BookDetails/BookDetails.tsx';
import { BooksStackNavigationProps } from 'src/navigation/BooksStack.tsx';
import { useAppDispatch, useAppSelector } from 'src/store';
import { deleteBook, IBook } from 'src/store/reducers/booksReducer.ts';
import { ThemeType } from 'src/styles/theme.ts';

export type BookDetailsHeaderProps = {};

const BookDetailsHeader: React.FC<BookDetailsHeaderProps> = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<BooksStackNavigationProps['navigation']>();
    const { params } = useRoute<BookDetailsNavigationProps['route']>();
    const book = useAppSelector(state => state.books.find(el => el.id === params.id)) as IBook;

    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    const handleDelete = useCallback(() => {
        navigation.goBack();
        dispatch(deleteBook(book));
    }, [book, dispatch, navigation]);

    return (
        <SafeAreaView edges={['top']}>
            <View style={styles.container}>
                <TouchableOpacity onPress={navigation.goBack} style={styles.button}>
                    <Icon name={'left'} size={24} color={theme.colors.primary} />
                </TouchableOpacity>
                <Text fontWeight={'500'} style={styles.title}>
                    {book.name}
                </Text>
                <TouchableOpacity onPress={handleDelete} style={styles.button}>
                    <Icon name={'trash'} size={24} color={theme.colors.red} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            paddingVertical: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: theme.colors.border,
        },
        title: {
            flex: 1,
            textAlign: 'center',
        },
        button: {
            alignItems: 'center',
            paddingHorizontal: 16,
        },
    });

export default BookDetailsHeader;
