import React from "react";
import { SubHeading } from ".";
import { render } from "@testing-library/react";

describe("SubHeading", () => {
  describe("getBy", () => {
    test("deveria renderizar o componente diretamente", () => {
      const { getByText } = render(<SubHeading>Para Estudar</SubHeading>);
      expect(getByText("Para Estudar")).toBeInTheDocument();
    });

    test.skip("não deveria renderizar o componente quando não tem children", () => {
      const { getByText } = render(<SubHeading></SubHeading>);
      expect(getByText("Para Estudar")).toBeNull();
    });
  });

  describe("queryBy", () => {
    test("deveria renderizar o componente diretamente", () => {
      const { queryByText } = render(<SubHeading>Para Estudar</SubHeading>);
      expect(queryByText("Para Estudar")).toBeInTheDocument();
    });

    test("não deveria renderizar o componente quando não tem children", () => {
      const { queryByText } = render(<SubHeading></SubHeading>);
      expect(queryByText("Para Estudar")).toBeNull();
    });
  });
});