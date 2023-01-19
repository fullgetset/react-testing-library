import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LearnTest from "./LearnTest";

describe("TEST API", () => {
  test("renders learn react link", () => {
    render(<LearnTest />);
    const ggDrop = screen.getByText(/ggdrop/i);
    // ищем строку через регулярное выражение
    const hellowWorld = screen.getByText(/hello world!/i);
    // ищем кнопку по роли
    const searchBtn = screen.getByRole("button");
    // ищем input по Placeholder
    const searchInput = screen.getByPlaceholderText(/input value/i);
    // проверяем наличие текста в нашем DOM дереве
    expect(hellowWorld).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(ggDrop).toBeInTheDocument();
    // debug
    // screen.debug();
    // В случае изменения тестируемой функции, для наглядной демонстрации, что изменилось
  });

  test("async test", async () => {
    render(<LearnTest />);
    //findBy - ищет элемент (возвращает объект обернутый в промис). используется для асинхронного использования
    //getBy - 100% должен найти какой-то элемент , еслии елемент не находится - тест падает. Используется для 100%% получения элемента
    //queryBy - можем убедиться в том , что какого-то элемента нет (чаще используется , что бы доказать отсуствие элемента, в случае отсуствия не выдаёт ошибку)

    // весь пример для асинхронной работы с сервером
    // screen.debug();
    const dataEl = await screen.findByText(/data/i);
    expect(dataEl).toBeInTheDocument();
    expect(dataEl).toHaveStyle({ color: "red" });
    // screen.debug();
  });

  test("Click Event", () => {
    render(<LearnTest />);

    // ищем элемент по data-testid
    const btn = screen.getByTestId("toggle-btn");

    // с помощью query проверям на отсуствие элемента добовляя toBeNull
    expect(screen.queryByTestId("toggle-elem")).toBeNull();

    // метод для событий
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("Input Event", () => {
    render(<LearnTest />);

    const searchInput = screen.getByPlaceholderText(/input value/i);

    // Проверяем что елемент содержит в себе пустую строку
    expect(screen.queryByTestId("value-elem")).toContainHTML("");

    // метод для искуственного взаимодействия событий , 2ым аргументом , передаём опции .  C помощью которых мы вводим в инпут значение value
    /*  fireEvent.input(searchInput, {
      target: { value: "123123" },
    }); */

    // метод для полного взаимодействия событий как у юзера (mouse,keyDowm и тд...)
    userEvent.type(searchInput, "123123");

    // проверям заданное выше значение
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
