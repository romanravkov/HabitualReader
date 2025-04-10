import React from 'react';
import { SafeAreaView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Alert from 'src/components/Alerts/Alert';
import { useAppSelector } from 'src/store';

const AlertsWrapper = () => {
    const alerts = useAppSelector(state => state.alerts);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {alerts?.length
                    ? alerts.map((el, index) => (
                          <Alert
                              last={index === alerts.length - 1}
                              {...el}
                              key={el.id}
                              id={el.id}
                          />
                      ))
                    : null}
            </View>
        </SafeAreaView>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        zIndex: 10,
        position: 'absolute',
        bottom: 50,
        paddingHorizontal: 16,
    },
});

export default AlertsWrapper;
