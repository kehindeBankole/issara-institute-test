import languageReducer from "./languageSlice";

const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
};

test("should return the initial state", () => {
  expect(languageReducer(undefined, {})).toEqual(initialState);
});
