import React, { useCallback } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme, useNavigation } from '@react-navigation/native';

import Text from 'src/components/Text';
import BookItem from 'src/modules/Books/pages/BooksList/components/BookItem.tsx';
import HomeHeader from 'src/modules/Home/components/HomeHeader.tsx';
import { BottomBarStackNavigationProps } from 'src/navigation/BottomBarStack.tsx';
import { STACKS } from 'src/navigation/constants.ts';
import { useAppSelector } from 'src/store';
import { IBook } from 'src/store/reducers/booksReducer.ts';
import { ThemeType } from 'src/styles/theme.ts';

const keyExtractor = (item: IBook) => String(item.id);

export default function Home() {
    const theme = useTheme();
    const styles = getStyles(theme);
    const books = useAppSelector(state => state.books.filter(el => el.isFavorite).slice(0, 2));
    const navigation = useNavigation<BottomBarStackNavigationProps['navigation']>();

    const renderItem = useCallback(({ item }: { item: IBook }) => {
        return <BookItem book={item} />;
    }, []);

    const openAllFavorites = useCallback(() => {
        navigation.navigate(STACKS.BOOKS_STACK.StackName);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <HomeHeader />
            {!!books.length && (
                <View style={styles.contentWrapper}>
                    <Text
                        size={18}
                        fontWeight={'500'}
                        style={styles.title}
                        color={theme.colors.text}
                    >
                        Favorite books
                    </Text>
                    <FlatList
                        data={books}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        contentContainerStyle={styles.flatList}
                        showsHorizontalScrollIndicator={false}
                    />
                    <TouchableOpacity style={styles.seeMore} onPress={openAllFavorites}>
                        <Text color={theme.colors.gray300}>Open all</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                </View>
            )}
        </View>
    );
}

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            flex: 1,
        },
        contentWrapper: {},
        title: {
            paddingHorizontal: 16,
            paddingBottom: 8,
        },
        flatList: {
            paddingHorizontal: 16,
            gap: 16,
        },
        seeMore: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 24,
        },
        separator: {
            height: 1,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: theme.colors.border,
            marginVertical: 24,
        },
    });
