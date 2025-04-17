import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { BooksStackParamList } from 'src/navigation/BooksStack.tsx';
import { ThemeType } from 'src/styles/theme.ts';

export type AddBookHeaderProps = {};
type NavigationProps = NativeStackScreenProps<BooksStackParamList>;

const AddBookHeader: React.FC<AddBookHeaderProps> = () => {
    const navigation = useNavigation<NavigationProps['navigation']>();
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack} style={styles.button}>
                <Icon name={'cross'} size={24} color={theme.colors.primary} />
            </TouchableOpacity>
            <Text fontWeight={'500'} style={styles.title}>
                Add a Book
            </Text>
            <TouchableOpacity disabled onPress={() => {}} style={styles.button}>
                <Icon name={'exclamation'} size={24} color={theme.colors.disabledPrimary} />
            </TouchableOpacity>
        </View>
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

export default AddBookHeader;
