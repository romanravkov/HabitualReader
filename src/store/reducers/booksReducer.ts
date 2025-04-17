import { LayoutAnimation } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generate } from 'shortid';

export interface IBook {
    name: string;
    author?: string;
    description?: string;
    pages: number;
    id: string;
    isFavorite: boolean;
    progress: number;
}

const initialState: IBook[] = [];

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action: PayloadAction<IBook>) {
            return [
                ...state,
                {
                    ...action.payload,
                    id: generate(),
                    isFavorite: false,
                    progress: 0,
                },
            ];
        },
        editBook(state, action: PayloadAction<Partial<IBook>>) {
            return state.map(book => {
                if (book.id === action.payload.id) {
                    return { ...book, ...action.payload };
                }
                return book;
            });
        },
        deleteBook(state, action: PayloadAction<{ id: IBook['id'] }>) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            return state.filter(el => el.id !== action.payload.id);
        },
    },
});

export const { addBook, editBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
