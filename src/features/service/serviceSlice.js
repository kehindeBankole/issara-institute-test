import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
  code: "en",
};

export const getPost = createAsyncThunk(
  "posts/getPosts",
  async (language_code = initialState.code) => {
    return fetch(
      `https://staging.cms.golden-dreams.org/api/v1/service-providers?lang=${language_code}`
    ).then((res) => res.json());
  }
);
export const serviceSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCode: (state, { payload }) => {
      state.code = payload;
    },
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [getPost.rejected]: (state, action) => {
      state.hasErrors = true;
    },
  },
});

export const { changeCode } = serviceSlice.actions;

export default serviceSlice.reducer;
