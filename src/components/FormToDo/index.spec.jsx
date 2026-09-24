import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormToDo from ".";
import { TodoContext } from "../TodoProvider/TodoContext";

describe("FormToDo", () => {
  test("Deveria renderizar o Form corretamente", () => {
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "um exemplo qualquer" } }}>
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );

    expect(getByRole("form")).toBeInTheDocument();
  });

  test("Deveria renderizar a descrição do todo selecionado", () => {
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "um exemplo qualquer DE NOVO" } }}
      >
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("um exemplo qualquer DE NOVO");
  });

  test("Deveria enviar o Form com a descrição Atualizada", async () => {
    const simulandoSubmit = jest.fn();

    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "um exemplo qualquer" } }}>
        <FormToDo onSubmit={simulandoSubmit} />
      </TodoContext.Provider>,
    );

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Um novo Curso ");

    const button = getByRole("button", { name: /salvar item/i });
    await userEvent.click(button);
    
    expect(simulandoSubmit).toHaveBeenCalled();
  });
});