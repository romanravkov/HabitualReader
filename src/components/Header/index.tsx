import React, { useMemo } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import Text from 'src/components/Text';
import { ThemeType } from 'src/styles/theme.ts';
import addAlpha from 'src/utils/addAlpha.ts';

export type HeaderProps = {
    left?: React.ReactNode | null;
    center?: React.ReactNode | null;
    right?: React.ReactNode | null;
    title?: string | null;
    children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
    left = null,
    center = null,
    title = '',
    right = null,
    children,
}) => {
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme), [theme]);

    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <View style={[styles.container]}>
                <View style={styles.leftSide}>{left}</View>
                <View style={styles.center}>
                    {center ? (
                        center
                    ) : (
                        <Text size={16} fontWeight="500" color={theme.colors.text}>
                            {title}
                        </Text>
                    )}
                </View>
                <View style={styles.rightSide}>{right}</View>
            </View>
            {children ? <View style={styles.childrenWrapper}>{children}</View> : null}
        </SafeAreaView>
    );
};

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        safeArea: {
            zIndex: 10,
            backgroundColor: addAlpha(theme.colors.block, 0.99),
            borderColor: theme.colors.border,
        },
        container: {
            height: 52,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        leftSide: {
            flex: 1,
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        center: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
        rightSide: {
            alignItems: 'flex-end',
            justifyContent: 'center',
            flex: 1,
            height: '100%',
        },
        childrenWrapper: {
            paddingBottom: 8,
            paddingHorizontal: 16,
        },
    });

export default Header;
