import React from "react";

// 1. Receba a prop 'data' desestruturando o objeto de props
function ProductionTable({ data }) {
  // 2. Adicione uma verificação para o caso de 'data' ainda não ter chegado
  if (!data || data.length === 0) {
    return <p>Carregando dados da produção...</p>;
  }

  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Ordem</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* 3. Mapeie o array 'data' diretamente */}
        {data.map((item, index) => (
          <tr key={item.ordem || index}> {/* Use a ordem como chave, é mais seguro */}
            <td>{item.ordem}</td>
            <td>{item.produto}</td>
            <td>{item.quantidade}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductionTable;
