import serviceReducer, { changeCode } from "./serviceSlice";

const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
  code: "en",
};

test("should return the initial state", () => {
  expect(serviceReducer(undefined, {})).toEqual(initialState);
});

test("language code changes", async () => {
  const actual = serviceReducer(initialState, changeCode("mz"));
  await expect(actual.code).toEqual("mz");
});
