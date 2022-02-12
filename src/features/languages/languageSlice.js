import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
};

export const getLanguages = createAsyncThunk("posts/getLanguages", async () => {
  return fetch(
    `https://staging.cms.golden-dreams.org/api/v1/localization/languages`
  ).then((res) => res.json());
});
export const languageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [getLanguages.pending]: (state, action) => {
      state.loading = true;
    },
    [getLanguages.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [getLanguages.rejected]: (state, action) => {
      state.hasErrors = true;
    },
  },
});
export default languageSlice.reducer;
