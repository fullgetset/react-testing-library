import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import PostsDetailsPage from "./pages/PostsDetailsPage";
import Posts from "./posts/Posts";

function App() {
  return (
    <>
      <Link to="/" data-testid="main-link">
        main
      </Link>
      <Link to="/about" data-testid="about-link">
        about
      </Link>
      <Link to="/posts" data-testid="about-link">
        posts
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
