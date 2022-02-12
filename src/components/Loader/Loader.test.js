import {
  fireEvent,
  render,
  waitForElement,
  screen,
} from "@testing-library/react";
import Loader from "./Loader";

test("loader component", () => {
  render(<Loader />);
  expect(screen.getByRole("loader")).toHaveTextContent("loading");
});
