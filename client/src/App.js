import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);
  return (
    <div className="App">
      <div className="navbar">
        <form className="navbar__search">
          <input type="text" name="product" placeholder="Search Product" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="image__container">
        {backendData.map((product, i) => {
          return (
            <img
              key={i}
              src={product.image}
              alt={product.name}
              className="product__image"
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
