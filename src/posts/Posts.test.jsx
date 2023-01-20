import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PostsDetailsPage from "../pages/PostsDetailsPage";
import Posts from "./Posts";

describe("Posts TEST", () => {
  test("should first", async () => {
    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostsDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    const posts = await screen.findAllByTestId("post-item");

    expect(posts.length).toBe(3);

    userEvent.click(posts[1]);
    expect(screen.getByTestId("post-page")).toBeInTheDocument();
  });
});
