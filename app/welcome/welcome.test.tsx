import { render, screen } from "@testing-library/react";

import { Welcome } from "./welcome";

test("should render", () => {
  render(<Welcome />);

  expect(screen.getByText("React Router Docs")).toBeInTheDocument();
});
