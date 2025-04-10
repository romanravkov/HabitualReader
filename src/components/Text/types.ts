import ReactComponents, { StyleProp, TextStyle } from 'react-native';

export type FontStyleType = 'normal' | 'italic';

export type FontWeightType = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export interface TextPropsType extends ReactComponents.TextProps {
    style?: StyleProp<TextStyle>;
    size?: number;
    color?: string;
    fontStyle?: FontStyleType;
    fontWeight?: FontWeightType;
    align?: TextStyle['textAlign'];
}
