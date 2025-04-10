import React from 'react';
import { SvgProps } from 'react-native-svg';

import AlertError from 'src/assets/icons/alert-error.svg';
import AlertSuccess from 'src/assets/icons/alert-success.svg';
import AlertWarning from 'src/assets/icons/alert-warning.svg';
import Attachment from 'src/assets/icons/attachment.svg';
import Burger from 'src/assets/icons/burger.svg';
import Calendar from 'src/assets/icons/calendar.svg';
import Car from 'src/assets/icons/car.svg';
import Cash from 'src/assets/icons/cash.svg';
import Check from 'src/assets/icons/check.svg';
import Comment from 'src/assets/icons/comment.svg';
import Configure from 'src/assets/icons/configure.svg';
import CrossCircle from 'src/assets/icons/cross-circle.svg';
import Cross from 'src/assets/icons/cross.svg';
import Dislike from 'src/assets/icons/dislike.svg';
import Down from 'src/assets/icons/down.svg';
import Edit from 'src/assets/icons/edit.svg';
import ExclamationCircle from 'src/assets/icons/exclamation-circle.svg';
import Exclamation from 'src/assets/icons/exclamation.svg';
import EyeClosed from 'src/assets/icons/eye-closed.svg';
import Eye from 'src/assets/icons/eye.svg';
import Favorite from 'src/assets/icons/favorite.svg';
import Garage from 'src/assets/icons/garage.svg';
import HeartFilled from 'src/assets/icons/heart-filled.svg';
import Heart from 'src/assets/icons/heart.svg';
import Home from 'src/assets/icons/home.svg';
import Left from 'src/assets/icons/left.svg';
import Like from 'src/assets/icons/like.svg';
import Location from 'src/assets/icons/location.svg';
import Lock from 'src/assets/icons/lock.svg';
import Logout from 'src/assets/icons/logout.svg';
import Map from 'src/assets/icons/map.svg';
import Message from 'src/assets/icons/message.svg';
import More from 'src/assets/icons/more.svg';
import Notification from 'src/assets/icons/notification.svg';
import Plus from 'src/assets/icons/plus.svg';
import Profile from 'src/assets/icons/profile.svg';
import Right from 'src/assets/icons/right.svg';
import Search from 'src/assets/icons/search.svg';
import Send from 'src/assets/icons/send.svg';
import Settings from 'src/assets/icons/settings.svg';
import Stack from 'src/assets/icons/stack.svg';
import Star from 'src/assets/icons/star.svg';
import Time from 'src/assets/icons/time.svg';
import Trash from 'src/assets/icons/trash.svg';
import Up from 'src/assets/icons/up.svg';

export type IconPropsType = {
    name?: IconNameType;
    size?: number;
    color?: string;
    style?: IconStylesType & SvgProps;
};

type IconStylesType = {
    width?: number;
    height?: number;
    color?: string;
};

export type IconNameType =
    | 'home'
    | 'stack'
    | 'profile'
    | 'eye'
    | 'eye-closed'
    | 'trash'
    | 'like'
    | 'dislike'
    | 'plus'
    | 'cross'
    | 'cross-circle'
    | 'check'
    | 'comment'
    | 'search'
    | 'exclamation'
    | 'exclamation-circle'
    | 'burger'
    | 'edit'
    | 'notification'
    | 'garage'
    | 'configure'
    | 'right'
    | 'more'
    | 'settings'
    | 'car'
    | 'down'
    | 'up'
    | 'logout'
    | 'lock'
    | 'map'
    | 'message'
    | 'calendar'
    | 'time'
    | 'cash'
    | 'location'
    | 'favorite'
    | 'star'
    | 'send'
    | 'attachment'
    | 'heart'
    | 'heart-filled'
    | 'alert-error'
    | 'alert-warning'
    | 'alert-success'
    | 'left';

const Icon: React.FC<IconPropsType> = ({ name = '', size = 24, color = 'black', style = {} }) => {
    const iconStyle = { width: size, height: size, color, ...style };
    switch (name) {
        case 'home':
            return <Home {...iconStyle} />;
        case 'stack':
            return <Stack {...iconStyle} />;
        case 'left':
            return <Left {...iconStyle} />;
        case 'right':
            return <Right {...iconStyle} />;
        case 'profile':
            return <Profile {...iconStyle} />;
        case 'eye':
            return <Eye {...iconStyle} />;
        case 'eye-closed':
            return <EyeClosed {...iconStyle} />;
        case 'trash':
            return <Trash {...iconStyle} />;
        case 'like':
            return <Like {...iconStyle} />;
        case 'dislike':
            return <Dislike {...iconStyle} />;
        case 'plus':
            return <Plus {...iconStyle} />;
        case 'cross':
            return <Cross {...iconStyle} />;
        case 'cross-circle':
            return <CrossCircle {...iconStyle} />;
        case 'check':
            return <Check {...iconStyle} />;
        case 'comment':
            return <Comment {...iconStyle} />;
        case 'search':
            return <Search {...iconStyle} />;
        case 'exclamation':
            return <Exclamation {...iconStyle} />;
        case 'exclamation-circle':
            return <ExclamationCircle {...iconStyle} />;
        case 'burger':
            return <Burger {...iconStyle} />;
        case 'edit':
            return <Edit {...iconStyle} />;
        case 'notification':
            return <Notification {...iconStyle} />;
        case 'garage':
            return <Garage {...iconStyle} />;
        case 'configure':
            return <Configure {...iconStyle} />;
        case 'more':
            return <More {...iconStyle} />;
        case 'settings':
            return <Settings {...iconStyle} />;
        case 'car':
            return <Car {...iconStyle} />;
        case 'down':
            return <Down {...iconStyle} />;
        case 'up':
            return <Up {...iconStyle} />;
        case 'logout':
            return <Logout {...iconStyle} />;
        case 'lock':
            return <Lock {...iconStyle} />;
        case 'map':
            return <Map {...iconStyle} />;
        case 'message':
            return <Message {...iconStyle} />;
        case 'calendar':
            return <Calendar {...iconStyle} />;
        case 'time':
            return <Time {...iconStyle} />;
        case 'cash':
            return <Cash {...iconStyle} />;
        case 'location':
            return <Location {...iconStyle} />;
        case 'favorite':
            return <Favorite {...iconStyle} />;
        case 'star':
            return <Star {...iconStyle} />;
        case 'send':
            return <Send {...iconStyle} />;
        case 'attachment':
            return <Attachment {...iconStyle} />;
        case 'heart':
            return <Heart {...iconStyle} />;
        case 'heart-filled':
            return <HeartFilled {...iconStyle} />;
        case 'alert-error':
            return <AlertError {...iconStyle} />;
        case 'alert-warning':
            return <AlertWarning {...iconStyle} />;
        case 'alert-success':
            return <AlertSuccess {...iconStyle} />;
        default:
            return <Home {...iconStyle} />;
    }
};

export default Icon;
