import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";

const LearnTest = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => setToggle((prev) => !prev);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const commit = await response.json();

    setData(commit);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <h2 data-testid="value-elem">{value}</h2>
      <div>GGDROP</div>
      {toggle && <div data-testid="toggle-elem">toogle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <button data-testid="toggle-btn" onClick={handleClick}></button>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="input value"
      />
      <Posts />
    </div>
  );
};

export default LearnTest;
