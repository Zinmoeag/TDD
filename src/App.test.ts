import { render, screen } from "@testing-library/react";
import First from './First';

it("renders learn react link", () => {
  render(First());
  const linkElement = screen.getByText('First Component');
  expect(linkElement).toBeInTheDocument();
});
