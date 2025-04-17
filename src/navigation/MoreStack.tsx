import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import More from 'src/modules/More/More.tsx';
import { STACKS } from 'src/navigation/constants';

export type MoreStackParamList = {
    [STACKS.MORE_STACK.More]: object;
};

const Stack = createNativeStackNavigator<MoreStackParamList>();

export default function MoreStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={STACKS.MORE_STACK.More} component={More} />
        </Stack.Navigator>
    );
}
