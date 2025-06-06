import { ReactElement } from 'react';
import { LayoutAnimation } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generate } from 'shortid';

export interface IAlert {
    text?: string;
    type: 'error' | 'warning' | 'success';
    child?: ReactElement;
    id: string;
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
                    id: generate(),
                },
            ];
            if (newAlerts.length > 5) {
                newAlerts.shift();
            }
            // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            return newAlerts;
        },
        deleteAlert(state, action: PayloadAction<{ id: IAlert['id'] }>) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            return state.filter(el => el.id !== action.payload.id);
        },
    },
});

export const { addAlert, deleteAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
