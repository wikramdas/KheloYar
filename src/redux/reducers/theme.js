import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {light} from '@src/themes';
export const changeTheme = createAsyncThunk(
  'settings/changeTheme',
  async theme => {
    return {theme};
  },
);
const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: light,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(changeTheme.fulfilled, (state, {payload}) => {
      return {...state, ...payload?.theme};
    });
  },
});
export default themeSlice.reducer;
