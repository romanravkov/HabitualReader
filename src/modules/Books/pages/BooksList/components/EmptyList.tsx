import React, { useMemo, useCallback } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/components/Button';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { BooksStackParamList } from 'src/navigation/BooksStack.tsx';
import { STACKS } from 'src/navigation/constants.ts';
import { ThemeType } from 'src/styles/theme.ts';

export type EmptyListProps = {};
type NavigationProps = NativeStackScreenProps<BooksStackParamList>;

const EmptyList: React.FC<EmptyListProps> = ({}) => {
    const navigation = useNavigation<NavigationProps['navigation']>();
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    const onAddBook = useCallback(() => {
        navigation.navigate(STACKS.BOOKS_STACK.AddBook);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Icon name={'exclamation-circle'} size={56} color={theme.colors.disabled} />
                <Text style={styles.title} size={16}>
                    Looks like your library’s feeling a little{' '}
                    <Text fontWeight={'600'}>lonely</Text> 😢
                </Text>
                <Button label={'Let’s give it a book!'} onPress={onAddBook} />
            </View>
        </View>
    );
};

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            flex: 1,
            paddingTop: '40%',
            alignItems: 'center',
            paddingHorizontal: '12%',
        },
        contentWrapper: {
            paddingVertical: 24,
            paddingHorizontal: 24,
            gap: 24,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.block,
            borderRadius: 16,
        },
        title: {
            textAlign: 'center',
            color: theme.colors.gray300,
        },
    });

export default EmptyList;
