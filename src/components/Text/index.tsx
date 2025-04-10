import React from 'react';
import ReactComponents, { StyleSheet, TextStyle } from 'react-native';

import { FontStyleType, FontWeightType, TextPropsType } from 'src/components/Text/types.ts';

const NativeText = ReactComponents.Text;

export const fontsConfig = {
    normal: {
        '100': 'Montserrat-Thin',
        '200': 'Montserrat-ExtraLight',
        '300': 'Montserrat-Light',
        '400': 'Montserrat-Regular',
        '500': 'Montserrat-Medium',
        '600': 'Montserrat-SemiBold',
        '700': 'Montserrat-Bold',
        '800': 'Montserrat-ExtraBold',
        '900': 'Montserrat-Black',
    },
    italic: {
        '100': 'Montserrat-ThinItalic',
        '200': 'Montserrat-ExtraLightItalic',
        '300': 'Montserrat-LightItalic',
        '400': 'Montserrat-Regular',
        '500': 'Montserrat-MediumItalic',
        '600': 'Montserrat-SemiBoldItalic',
        '700': 'Montserrat-BoldItalic',
        '800': 'Montserrat-ExtraBoldItalic',
        '900': 'Montserrat-BlackItalic',
    },
};

export const convertingFont = (fontStyle: FontStyleType, fontWeight: FontWeightType) => {
    return {
        fontFamily: fontsConfig[fontStyle][fontWeight],
    };
};

const Text: React.FC<TextPropsType> = ({
    children,
    style,
    fontStyle = 'normal',
    fontWeight = '400',
    size = 16,
    color = 'black',
    align = 'left',
    ...props
}) => {
    const styles = getStyles(size, color, align);
    return (
        <NativeText style={[styles.text, style, convertingFont(fontStyle, fontWeight)]} {...props}>
            {children}
        </NativeText>
    );
};

const getStyles = (size: number, color: string, align: TextStyle['textAlign']) =>
    StyleSheet.create({
        text: {
            color,
            fontSize: size,
            lineHeight: size + 6,
            textAlign: align,
        },
    });

export default Text;
