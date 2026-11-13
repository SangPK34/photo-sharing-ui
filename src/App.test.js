import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app header with author name", () => {
  render(<App />);
  const authorElement = screen.getByText(/Phạm Khắc Sang/i);
  expect(authorElement).toBeInTheDocument();
});
