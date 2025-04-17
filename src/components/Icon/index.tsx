import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Icons } from 'src/components/Icon/constants';

export type IconPropsType = {
    name?: IconNameType;
    size?: number;
    color?: string;
    style?: IconStylesType & SvgProps;
    fill?: boolean;
};

type IconStylesType = {
    width?: number;
    height?: number;
    color?: string;
};

export type IconNameType = keyof typeof Icons;
const Icon: React.FC<IconPropsType> = ({
    name,
    size = 24,
    color = 'black',
    fill = false,
    style = {},
}) => {
    const iconStyle = {
        width: size,
        height: size,
        fill: fill ? 'currentColor' : 'none',
        color,
        ...style,
    };
    if (!name || !Object(Icons).hasOwnProperty(name)) {
        const CrossIcon = Icons['cross-circle'];
        return <CrossIcon {...iconStyle} color={'red'} />;
    }
    const Component = Icons[name];
    return <Component {...iconStyle} />;
};

export default Icon;
