import React, { useCallback } from 'react';
import { LayoutAnimation, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationRoute, useTheme } from '@react-navigation/native';

import Icon, { IconNameType } from 'src/components/Icon';
import { STACKS } from 'src/navigation/constants.ts';
import { ThemeType } from 'src/styles/theme.ts';
import addAlpha from 'src/utils/addAlpha.ts';

const tabBarConfig: Record<string, { iconName: IconNameType }> = {
    [STACKS.HOME_STACK.StackName]: {
        iconName: 'home',
    },
    [STACKS.BOOKS_STACK.StackName]: {
        iconName: 'book',
    },
    [STACKS.MORE_STACK.StackName]: {
        iconName: 'more',
    },
};

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    const renderTabBarItem = useCallback(
        (route: NavigationRoute<any, any>, index: number) => {
            const isFocused = state.index === index;
            const handlePress = () => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                navigation.navigate(route.name, route.params);
            };

            switch (route.name) {
                case STACKS.HOME_STACK.StackName:
                case STACKS.BOOKS_STACK.StackName:
                case STACKS.MORE_STACK.StackName: {
                    return (
                        <TouchableOpacity
                            disabled={isFocused}
                            onPress={handlePress}
                            key={index}
                            style={[styles.item, isFocused && styles.itemActive]}
                        >
                            <Icon
                                name={tabBarConfig[route.name].iconName}
                                color={
                                    isFocused ? theme.colors.primary : theme.colors.disabledPrimary
                                }
                                size={28}
                            />
                        </TouchableOpacity>
                    );
                }
                default:
                    return null;
            }
        },
        [
            navigation,
            state.index,
            styles.item,
            styles.itemActive,
            theme.colors.disabledPrimary,
            theme.colors.primary,
        ]
    );

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            {state.routes.map(renderTabBarItem)}
        </SafeAreaView>
    );
};

const getStyles = (theme: ThemeType) =>
    EStyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: theme.colors.background100,
            height: 100,
            borderTopWidth: 1,
            borderColor: theme.colors.border,
            paddingTop: 8,
        },
        item: {
            padding: 16,
            borderRadius: '100%',
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        itemActive: {
            backgroundColor: addAlpha(theme.colors.primary, 0.1),
        },
    });

export default TabBar;
