import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 2000);
  }, []);

  return (
    <div className="App">
      {data && <div>data</div>}
      <h1>Hello world!</h1>
      <button></button>
      <input type="text" placeholder="input value" />
    </div>
  );
}

export default App;
