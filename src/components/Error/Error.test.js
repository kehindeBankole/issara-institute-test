import {
  fireEvent,
  render,
  waitForElement,
  screen,
} from "@testing-library/react";
import Error from "./Error";

test("loader component", () => {
  render(<Error />);
  expect(screen.getByRole("error")).toHaveTextContent(
    "data is not available at this time (could also be your internet)"
  );
});
