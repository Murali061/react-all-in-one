import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notes } from "../../components/models";
import axios from "axios";

const URL = "http://localhost:3001";

const initialState: Notes[] = [];

export const getAsyncNotes = createAsyncThunk(
  "notes/getAsyncNotes",
  async () => {
    const response = await axios.get(`${URL}/notes`);
    return { notes: response.data } as { notes: Notes[] };
  }
);

export const addAsyncNotes = createAsyncThunk(
  "notes/addAsyncNotes",
  async (notes: Notes) => {
    const response = await axios.post(`${URL}/notes`, {
      note: notes,
    });
   return { note: notes } as { note: Notes };
  }
);

export const deleteAyncNotes = createAsyncThunk(
    'notes/deleteAyncNotes',
    async (selId: string) => {
        const response = await axios.delete(`${URL}/notes`,
        {
            data:{
                id: selId
            }
        })
        return {notes: response.data} as {notes: Notes[]}
    }
)

const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<{ note: Notes }>) => {
      state.push(action.payload.note);
    },
    deleteNotes: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((note) => note.id != action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncNotes.fulfilled, (state, action) => {
        return action.payload.notes;
      })
      .addCase(addAsyncNotes.fulfilled, (state, action) => {
        state.push(action.payload?.note);
      })
      .addCase(deleteAyncNotes.fulfilled, (state, action) => {
        return action.payload.notes;
      })
  },
});

export const { addNotes, deleteNotes } = notesSlice.actions;
export default notesSlice.reducer;
