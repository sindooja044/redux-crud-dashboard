import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersAPI } from "../../services/api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetchUsersAPI();
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      const nextId =
        state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1;

      state.list.push({
        ...action.payload,
        id: nextId,
      });
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteUser: (state, action) => {
      const filteredList = state.list.filter(
        (user) => user.id !== action.payload
      );

      state.list = filteredList.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
