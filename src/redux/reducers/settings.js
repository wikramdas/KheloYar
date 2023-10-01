import light from '../../themes/light.json';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
export const changeTheme = createAsyncThunk(
  'settings/changeTheme',
  async theme => {
    return {theme};
  },
);
const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: {
    theme: light,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(changeTheme.fulfilled, (state, {payload}) => {
      state.theme = payload?.theme ?? {};
    });
  },
});
export default settingsSlice.reducer;
