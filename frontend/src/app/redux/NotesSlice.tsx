import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { Notes } from "../components/models";

const initialState: Notes[] = []

const notesSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        addNotes: (state, action: PayloadAction<{note: Notes}>) => {
            state.push(action.payload.note);
        },
        deleteNotes: (state, action: PayloadAction<{id: string}>) => {
           
            
            return state.filter((note)=> note.id != action.payload.id);
        }
    }
})

export const { addNotes, deleteNotes } = notesSlice.actions;
export default notesSlice.reducer;