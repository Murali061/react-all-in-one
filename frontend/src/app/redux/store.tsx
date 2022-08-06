import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from './NotesSlice';

export const store  = configureStore({
    reducer: {
        notes: NotesReducer
    }
})

// required for using custom useDispatch and useSelector only in typescript project
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;