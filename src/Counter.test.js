import { render } from "@testing-library/react";
import App from "./App";

describe("Counter App", () => {
  it("displays correct initial count", () => {
    const { getByTestId } = render(<App />);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toBe("Your Count is: 0");
  });
});
