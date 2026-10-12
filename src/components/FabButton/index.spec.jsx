import React from "react";
import { render } from "@testing-library/react";
import FabButton from ".";

describe("FabButton", () => {
  test("deveria Redenizar corrtamente o Componente", () => {
    const { getByRole } = render(<FabButton onClick={() => {}}>Texto Simples</FabButton>);
    expect(getByRole("button")).toBeInTheDocument();

    const button = getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("fab");

    expect(button).toHaveTextContent("Texto Simples");
  });
});
