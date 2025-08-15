import { useState, useEffect } from 'react'; // Importe também o useState e useEffect
import ProductionTable from "./components/ProductionTable";

function App() {
  const [data, setData] = useState([]);
  // 1. Corrija a URL da API para a porta 3000
  const API_URL = "http://localhost:3000/production";

  useEffect(( ) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erro ao buscar dados:", error)); // Adicione um .catch para ver erros
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Sistem WM - Produção</h1>
      {/* 2. Passe os dados para o componente */}
      <ProductionTable data={data} />
    </div>
  );
}

export default App;
