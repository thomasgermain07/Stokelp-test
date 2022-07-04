import { act } from "@testing-library/react";
import { render } from "../Utils/test-utils";
import "@testing-library/jest-dom";
import Fruits from "../Views/Fruits";

describe("Fruits", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("<Fruits /> snapshot", async () => {
    // Test first render and componentDidMount
    await act(() => {
      container = render(<Fruits />).container;
    });
    expect(container).toMatchSnapshot();
  });
});
