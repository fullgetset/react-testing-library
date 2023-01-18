import { render, screen } from "@testing-library/react";
import App from "./App";

describe.skip("TEST API", () => {
  test("renders learn react link", () => {
    render(<App />);
    // ищем строку через регулярное выражение
    const hellowWorld = screen.getByText(/hello world!/i);
    // ищем кнопку
    const searchBtn = screen.getByRole("button");
    // ищем input
    const searchInput = screen.getByPlaceholderText(/input value/i);
    // проверяем наличие текста в нашем DOM дереве
    expect(hellowWorld).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    // debug
    screen.debug();
    // В случае изменения тестируемой функции, для наглядной демонстрации, что изменилось
    expect(searchInput).toMatchSnapshot();
  });

  test("renders learn react link", async () => {
    render(<App />);
    //findBy - ищет элемент (возвращает объект обернутый в промис). используется для асинхронного использования
    //getBy - 100% должен найти какой-то элемент , еслии улемент не находится - тест падает. Используется для 100%% получения элемента
    //queryBy - можем убедиться в том , что какого-то элемента нет (чаще используется , что бы доказать отсуствие элемента, в случае отсуствия не выдаёт ошибку)

    const hellowWorld = await screen.findByText(/data/i);
    expect(hellowWorld).toBeInTheDocument();
  });
});
