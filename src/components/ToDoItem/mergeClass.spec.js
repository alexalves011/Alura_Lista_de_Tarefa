import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
  test("Deveria retorna a classe do todo-Item quando o item não estiver completo", () => {
    // Arrange: preparar os dados e ambiente que precisamos para fazer o teste

    const isItemCompleted = false;

    // act

    const styles = mergeClass(isItemCompleted);

    // Assert

    expect(styles).toBe("todo-item");
  });

  test("Deveria retorna a classe do todo-Item quando o item não estiver completo", () => {
    // Arrange: preparar os dados e ambiente que precisamos para fazer o teste

    const isItemCompleted = true;

    // act

    const styles = mergeClass(isItemCompleted);

    // Assert

    expect(styles).toBe("todo-item completed");
  });
});
