import "./App.css";
import fetchData from "./services/api";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [invalidCity, setInvalidCity] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData(city).then((res) => {
        setData(res);
        setInvalidCity(false);
      });
    } catch (err) {
      setInvalidCity(true);
      setCity("");
      setData("");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira sua cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">🔎</button>
      </form>

      {!data && !invalidCity && (
        <h2 className="title">Insira o nome de sua cidade.</h2>
      )}
      {data && <Card data={data} />}
      {invalidCity && <h3 className="invalid_city">Cidade Inválida</h3>}
    </main>
  );
}

export default App;
