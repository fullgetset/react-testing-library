import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Posts from "./Posts";

describe("Posts TEST", () => {
  test("should first", async () => {
    render(<Posts />);

    const posts = await screen.findAllByTestId("posts-item");

    expect(posts.length).toBe(3);

    userEvent.click(posts[0]);
  });
});
