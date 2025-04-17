import React, { useMemo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme, useNavigation } from '@react-navigation/native';

import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { STACKS } from 'src/navigation/constants.ts';
import { RootStackNavigationProps } from 'src/navigation/RootStack.tsx';
import { useAppDispatch } from 'src/store';
import { deleteBook, editBook, IBook } from 'src/store/reducers/booksReducer.ts';
import { ThemeType } from 'src/styles/theme.ts';

export type BookItemProps = {
    book: IBook;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const navigation = useNavigation<RootStackNavigationProps['navigation']>();
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);
    const dispatch = useAppDispatch();

    const handleFavorite = useCallback(() => {
        dispatch(
            editBook({
                ...book,
                isFavorite: !book.isFavorite,
            })
        );
    }, [book, dispatch]);

    const handleEdit = useCallback(() => {
        dispatch(deleteBook(book));
    }, [book, dispatch]);

    const handlePress = useCallback(() => {
        navigation.navigate(STACKS.ROOT_STACK.BookDetails, {
            id: book.id,
        });
    }, [book.id, navigation]);

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View>
                <CircularProgress
                    size={70}
                    width={8}
                    fill={book.progress}
                    rotation={180}
                    tintColor={theme.colors.primary}
                    backgroundColor={theme.colors.gray500}
                >
                    {(fill: string = '0') => (
                        <Text size={16} fontWeight={'600'} color={theme.colors.text}>
                            {fill}%
                        </Text>
                    )}
                </CircularProgress>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.header}>
                    <Text
                        fontWeight={'600'}
                        style={styles.title}
                        size={16}
                        color={theme.colors.text}
                    >
                        {book.name}
                        {book.author && (
                            <Text size={16} color={theme.colors.gray400}>
                                {' '}
                                by {book.author}
                            </Text>
                        )}
                    </Text>
                    <View style={styles.actionsWrapper}>
                        <TouchableOpacity onPress={handleFavorite}>
                            <Icon
                                name={'favorite'}
                                fill={book.isFavorite}
                                color={book.isFavorite ? theme.colors.yellow : theme.colors.gray400}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEdit}>
                            <Icon name={'play'} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
                {book.description && (
                    <Text
                        size={12}
                        fontWeight={'400'}
                        style={styles.description}
                        color={theme.colors.gray100}
                    >
                        {book.description}
                    </Text>
                )}
                <Text size={14} color={theme.colors.gray200}>
                    Pages: {book.pages}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.block,
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
            gap: 16,
            flex: 1,
        },
        contentWrapper: {
            gap: 8,
            flex: 1,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
        },
        title: {
            flex: 1,
        },
        actionsWrapper: {
            flexDirection: 'row',
            gap: 16,
            alignItems: 'center',
        },
        description: {
            padding: 6,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.background,
        },
    });

export default BookItem;
