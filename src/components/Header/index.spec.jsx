import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  test("Deveria redenizar o componente", () => {
    // ARRANGE

    const Componente = <Header />;

    expect(render(<Header />)).toBeTruthy();
  });


  test("Deveria redenizar o componente com a classe correta", () => {
    // ARRANGE

    const Componente = <Header />;

      const {container} = render(<Header/>)

      expect(container.firstChild).toHaveClass("header")

  });
});
