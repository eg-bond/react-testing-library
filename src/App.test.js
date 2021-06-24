import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // render отрисовывает компоненту и возвращает методы для взаимодействия с ним
  const { getByText } = render(<App />);
  // getByText ищет элемент по тексту внутри него (при помощи регулярок)
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  screen.debug();
});
