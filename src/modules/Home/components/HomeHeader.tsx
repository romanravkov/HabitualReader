import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { ThemeType } from 'src/styles/theme.ts';

export type HomeHeaderProps = {};

const HomeHeader: React.FC<HomeHeaderProps> = ({}) => {
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.greetingWrapper}>
                    <Text style={styles.title} size={24}>
                        Welcome{' '}
                        <Text style={styles.title} size={24} fontWeight={'600'}>
                            Roman! 👋
                        </Text>
                    </Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionWrapper} onPress={() => {}}>
                        <Icon name={'search'} size={22} style={styles.actionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionWrapper} onPress={() => {}}>
                        <Icon name={'profile'} size={22} style={styles.actionIcon} />
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
        greetingWrapper: {
            gap: 4,
        },
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

export default HomeHeader;
