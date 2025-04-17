import { Theme } from '@react-navigation/native';

const primary = '#7198DB';
const darkPrimary = '#426dba';

const darkTheme = {
    dark: true,
    colors: {
        // required for navigation
        primary: darkPrimary,
        background: '#2b2e35',
        card: '#1e2025',
        text: '#e3e3e3',
        border: '#333333',
        notification: '#FD6150',
        // end of required for navigation

        icon: primary,

        block: '#202020',

        background100: '#1e2025',
        background200: '#24272e',
        background300: '#2f3239',

        primaryText: '#e3e3e3',
        disabledPrimary: '#616161',
        textOnPrimary: '#fcfcfc',

        gray100: '#CFCCCC',
        gray200: '#999999',
        gray300: '#777777',
        gray400: '#555555',
        gray500: '#444444',

        disabled: '#616161',
        // static
        white: '#FFFFFF',
        black: '#222222',
        primaryBlack: '#313131',
        red: '#DD2E2E',
        yellow: '#FBBC41',
        green: '#3FEC50',
    },
    fonts: {
        regular: {
            fontFamily: 'Montserrat-Regular',
            fontWeight: '400',
        },
        medium: {
            fontFamily: 'Montserrat-Medium',
            fontWeight: '500',
        },
        bold: {
            fontFamily: 'Montserrat-Bold',
            fontWeight: '700',
        },
        heavy: {
            fontFamily: 'Montserrat-Black',
            fontWeight: '900',
        },
    },
};

const lightTheme = {
    dark: false,
    colors: {
        // required for navigation
        primary,
        background: '#F2F4F4',
        card: '#F0F0F0',
        text: '#212121',
        border: '#dbdbdb',
        notification: '#FD6150',
        // end of required for navigation

        icon: primary,
        block: '#fcfcfc',

        background100: '#ffffff',
        background200: '#e7e7e7',
        background300: '#dcdcdc',

        primaryText: primary,
        textOnPrimary: '#fcfcfc',
        disabledPrimary: '#b8b8b8',

        gray100: '#333333',
        gray200: '#555555',
        gray300: '#666666',
        gray400: '#999999',
        gray500: '#CFCCCC',

        disabled: '#b8b8b8',
        // static
        white: '#FFFFFF',
        black: '#222222',
        primaryBlack: '#313131',
        red: '#DD2E2E',
        yellow: '#FBBC41',
        green: '#3FEC50',
    },
    fonts: {
        regular: {
            fontFamily: 'Montserrat-Regular',
            fontWeight: '400',
        },
        medium: {
            fontFamily: 'Montserrat-Medium',
            fontWeight: '500',
        },
        bold: {
            fontFamily: 'Montserrat-Bold',
            fontWeight: '700',
        },
        heavy: {
            fontFamily: 'Montserrat-Black',
            fontWeight: '900',
        },
    },
};

export interface ThemeType extends Theme {
    colors: typeof lightTheme.colors;
}

export default {
    darkTheme,
    lightTheme,
} as {
    darkTheme: ThemeType;
    lightTheme: ThemeType;
};
