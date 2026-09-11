import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
  test.each([
    { entrada: true, saida: "todo-item completed" },
    { entrada: false, saida: "todo-item" },
  ])("deveria retornar a classe base do todo-item e a classe completed quando o item e...", ({entrada, saida}) => {
    expect(mergeClass(entrada)).toBe(saida);
  });
});