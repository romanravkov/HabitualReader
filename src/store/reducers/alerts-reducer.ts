import { ReactElement } from 'react';
import { LayoutAnimation } from 'react-native';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAlert {
    text?: string;
    type: 'error' | 'warning' | 'success';
    child?: ReactElement;
    id: number;
    duration?: number;
}

const initialState: IAlert[] = [];

const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        addAlert(state, action: PayloadAction<Omit<IAlert, 'id'>>) {
            const newAlerts = [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                },
            ];
            if (newAlerts.length > 5) {
                newAlerts.shift();
            }
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            return newAlerts;
        },
        deleteAlert(state, action: PayloadAction<{ id: number }>) {
            const newAlerts = state.filter(el => el.id !== action.payload.id);

            // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            return newAlerts;
        },
    },
});

export const { addAlert, deleteAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
