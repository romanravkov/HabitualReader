import React, { useEffect, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useTheme } from '@react-navigation/native';

import Icon, { IconNameType } from 'src/components/Icon';
import Text from 'src/components/Text';
import { useAppDispatch } from 'src/store';
import { deleteAlert, IAlert } from 'src/store/reducers/alerts-reducer.ts';
import colors from 'src/styles/colors.ts';
import { ThemeType } from 'src/styles/theme.ts';
import addAlpha from 'src/utils/addAlpha.ts';

interface AlertPropsType extends IAlert {
    last: boolean;
}

const Alert = ({ child, text = '', type, id, last, duration = 5000 }: AlertPropsType) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const styles = useMemo(() => getStyles(theme, last), [last, theme]);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(deleteAlert({ id }));
        }, duration);
        return () => clearTimeout(timer);
    }, []);

    const handlePress = () => {
        dispatch(deleteAlert({ id }));
    };

    const typeConfig: Record<
        IAlert['type'],
        {
            color: string;
            iconName: IconNameType;
        }
    > = {
        error: {
            color: theme.colors.red,
            iconName: 'alert-error',
        },
        warning: {
            color: theme.colors.yellow,
            iconName: 'alert-warning',
        },
        success: {
            color: theme.colors.green,
            iconName: 'alert-success',
        },
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View style={[styles.leftLine, { backgroundColor: typeConfig[type].color }]} />
            <View style={styles.icon}>
                <Icon name={typeConfig[type].iconName} size={28} color={typeConfig[type].color} />
            </View>
            {child ? (
                child
            ) : text ? (
                <Text color={colors.white} style={styles.textWrapFix} fontWeight="500" size={16}>
                    {text}
                </Text>
            ) : null}
        </TouchableOpacity>
    );
};

const getStyles = (theme: ThemeType, last: boolean) =>
    EStyleSheet.create({
        icon: {
            marginRight: 16,
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: addAlpha(theme.colors.primaryBlack, 0.95),
            paddingVertical: 16,
            paddingHorizontal: 16,
            overflow: 'hidden',
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            marginBottom: last ? 0 : 8,
            width: '100%',
        },
        leftLine: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 4,
        },
        textWrapFix: {
            flex: 1,
            flexWrap: 'wrap',
        },
    });

export default Alert;
