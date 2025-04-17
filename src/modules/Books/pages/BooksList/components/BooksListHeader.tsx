import React, { useCallback, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { BooksStackParamList } from 'src/navigation/BooksStack.tsx';
import { STACKS } from 'src/navigation/constants.ts';
import { ThemeType } from 'src/styles/theme.ts';

export type BooksListHeaderProps = {};
type NavigationProps = NativeStackScreenProps<BooksStackParamList>;

const BooksListHeader: React.FC<BooksListHeaderProps> = () => {
    const navigation = useNavigation<NavigationProps['navigation']>();
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    const onAddBook = useCallback(() => {
        navigation.navigate(STACKS.BOOKS_STACK.AddBook);
    }, [navigation]);

    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title} size={24}>
                        Your{' '}
                        <Text fontWeight={'600'} style={styles.title} size={24}>
                            books 📚
                        </Text>
                    </Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionWrapper} onPress={onAddBook}>
                        <Icon name={'plus'} size={22} style={styles.actionIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator} />
        </SafeAreaView>
    );
};

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        safeArea: {
            zIndex: 10,
            borderColor: theme.colors.border,
        },
        container: {
            paddingHorizontal: 24,
            paddingTop: 24,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        separator: {
            height: 1,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: theme.colors.border,
            marginVertical: 24,
        },
        titleWrapper: {},
        title: {
            color: theme.colors.text,
        },
        actions: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
        },
        actionWrapper: {
            backgroundColor: theme.colors.background100,
            borderWidth: 1,
            borderColor: theme.colors.border,
            padding: 12,
            borderRadius: '100%',
        },
        actionIcon: {
            color: theme.colors.primary,
        },
    });

export default BooksListHeader;
