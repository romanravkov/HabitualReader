import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import AlertsWrapper from 'src/components/Alerts/AlertsWrapper';
import RootStack from 'src/navigation/RootStack';
import { persistor, store } from 'src/store';
import theme from 'src/styles/theme.ts';

const StatusBarManager = () => {
    const scheme = useColorScheme();

    useEffect(() => {
        StatusBar.setBarStyle(scheme === 'dark' ? 'light-content' : 'dark-content', true);
    }, [scheme]);

    return null;
};

export default function App() {
    const scheme = useColorScheme();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer theme={scheme === 'dark' ? theme.darkTheme : theme.lightTheme}>
                    <StatusBarManager />
                    <RootStack />
                    <AlertsWrapper />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
