import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [name, setName] = useState(null);
  const [inputNameValue, setInputNameValue] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/products");
      const data = response.data;
      setBackendData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      if (inputNameValue) {
        const response = await axios.get(`/api/products/${inputNameValue}`);
        const data = response.data;
        setBackendData(data);
      }
    }
    fetchProducts();
  }, [inputNameValue]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputNameValue(name);
  };
  return (
    <div className="App">
      <div className="navbar">
        <form className="navbar__search">
          <input
            type="text"
            value={name}
            name="product"
            placeholder="Search Product"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
      <div className="image__container">
        {backendData.map((product, i) => {
          return (
            <div className="image__wrapper">
              <p id="product__name">{product.name}</p>
              <img
                key={i}
                src={product.image}
                alt={product.name}
                className="product__image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
