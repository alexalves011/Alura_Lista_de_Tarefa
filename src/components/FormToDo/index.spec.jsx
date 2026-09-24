import { render } from "@testing-library/react";
import React from "react";
import FormToDo from ".";
import { TodoContext } from "../TodoProvider/TodoContext";

describe("FormToDo", () => {
  test("Deveria Redenizar o Form corrtamente", () => {
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "um exemplo qualquer" } }}>
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );

    expect(getByRole("form")).toBeInTheDocument;
  });

 test("Deveria renderizar a descrição do todo selecionado", () => {
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "um exemplo qualquer DE NOVO" } }}
      >
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("um exemplo qualquer DE NOVO");
  });
});
