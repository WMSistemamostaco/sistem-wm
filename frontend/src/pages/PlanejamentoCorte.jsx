import corte from "../data/corte";

function PlanejamentoCorte() {
  const total = (lista) =>
    lista.reduce((soma, valor) => soma + valor, 0);

  const totalVendas = total(corte.vendas);
  const totalRemessa = total(corte.remessaPorTamanho);
  const totalCorte = total(corte.corte);
  const totalDefeitos = total(corte.defeitos);

  const estoque = corte.corte.map((valor, index) => {
    const venda = corte.vendas[index] || 0;
    const remessa = corte.remessaPorTamanho[index] || 0;
    const defeito = corte.defeitos[index] || 0;

    return venda - remessa + valor - defeito;
  });

  const totalEstoque = total(estoque);

  const percentualCorteVendas =
    totalRemessa > 0
      ? ((totalCorte - totalRemessa) / totalRemessa) * 100
      : 0;

  const percentualCorteEstoque =
    totalVendas > 0
      ? (totalEstoque / totalVendas) * 100
      : 0;

  return (
    <div className="cortePage">

      <div className="corteTitulo">
        <div>
          <h1>Planejamento de Corte</h1>

          <p>
            Planejamento e análise da produção por referência
          </p>
        </div>

        <button className="btnPrimario">
          + Nova Referência
        </button>
      </div>

      {/* INFORMAÇÕES DO PRODUTO */}

      <section className="corteCard">

        <div className="corteCardTitulo">
          <h2>Informações do Produto</h2>
        </div>

        <div className="infoGrid">

          <div>
            <label>Referência</label>
            <strong>{corte.referencia}</strong>
          </div>

          <div>
            <label>Referência Extra</label>
            <strong>{corte.referenciaExtra}</strong>
          </div>

          <div>
            <label>Modelo</label>
            <strong>{corte.modelo}</strong>
          </div>

          <div>
            <label>Ranking</label>
            <strong>#{corte.ranking}</strong>
          </div>

          <div>
            <label>% Aposta</label>
            <strong>{corte.aposta}%</strong>
          </div>

          <div>
            <label>Valor</label>
            <strong>
              R$ {corte.valor.toFixed(2).replace(".", ",")}
            </strong>
          </div>

        </div>

      </section>

      {/* PRODUÇÃO */}

      <section className="corteCard">

        <div className="corteCardTitulo">
          <h2>Produção</h2>
        </div>

        <div className="infoGrid">

          <div>
            <label>Facção</label>
            <strong>{corte.faccao}</strong>
          </div>

          <div>
            <label>Lavanderia</label>
            <strong>{corte.lavanderia}</strong>
          </div>

          <div>
            <label>Tecido</label>
            <strong>{corte.tecido}</strong>
          </div>

          <div>
            <label>Estoque de Tecido</label>
            <strong>{corte.estoqueTecido} mt</strong>
          </div>

          <div>
            <label>Consumo</label>
            <strong>{corte.consumo} mt</strong>
          </div>

          <div>
            <label>Remessa</label>
            <strong>{corte.remessa}</strong>
          </div>

        </div>

      </section>

      {/* TABELA */}

      <section className="corteCard tabelaCard">

        <div className="corteCardTitulo">
          <h2>Grade de Produção</h2>

          <span>
            Remessa {corte.remessa}
          </span>
        </div>

        <div className="tabelaScroll">

          <table className="tabelaCorte">

            <thead>

              <tr>

                <th>Controle</th>

                {corte.tamanhos.map((tamanho) => (
                  <th key={tamanho}>
                    {tamanho}
                  </th>
                ))}

                <th>Total</th>

              </tr>

            </thead>

            <tbody>

              <tr className="linhaVenda">

                <td>VENDAS</td>

                {corte.vendas.map((valor, index) => (
                  <td key={index}>
                    {valor}
                  </td>
                ))}

                <td>
                  <strong>{totalVendas}</strong>
                </td>

              </tr>

              <tr className="linhaRemessa">

                <td>REM {corte.remessa}</td>

                {corte.remessaPorTamanho.map((valor, index) => (
                  <td key={index}>
                    {valor}
                  </td>
                ))}

                <td>
                  <strong>{totalRemessa}</strong>
                </td>

              </tr>

              <tr className="linhaSaldo">

                <td>SALDO</td>

                {corte.vendas.map((venda, index) => {

                  const remessa =
                    corte.remessaPorTamanho[index] || 0;

                  return (
                    <td key={index}>
                      {venda - remessa}
                    </td>
                  );

                })}

                <td>
                  <strong>
                    {totalVendas - totalRemessa}
                  </strong>
                </td>

              </tr>

              <tr className="linhaCorte">

                <td>CORTE</td>

                {corte.corte.map((valor, index) => (
                  <td key={index}>
                    {valor}
                  </td>
                ))}

                <td>
                  <strong>{totalCorte}</strong>
                </td>

              </tr>

              <tr className="linhaEstoque">

                <td>ESTOQUE</td>

                {estoque.map((valor, index) => (
                  <td key={index}>
                    {valor}
                  </td>
                ))}

                <td>
                  <strong>{totalEstoque}</strong>
                </td>

              </tr>

              <tr className="linhaDefeito">

                <td>DEFEITOS</td>

                {corte.defeitos.map((valor, index) => (
                  <td key={index}>
                    {valor}
                  </td>
                ))}

                <td>
                  <strong>{totalDefeitos}</strong>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* INDICADORES */}

      <section className="indicadoresCorte">

        <div className="indicador">

          <span>% CORTE / VENDAS</span>

          <strong>
            {percentualCorteVendas.toFixed(1)}%
          </strong>

        </div>

        <div className="indicador">

          <span>% CORTE / ESTOQUE</span>

          <strong>
            {percentualCorteEstoque.toFixed(1)}%
          </strong>

        </div>

        <div className="indicador">

          <span>TOTAL DE VENDAS</span>

          <strong>
            {totalVendas}
          </strong>

        </div>

        <div className="indicador">

          <span>TOTAL DE CORTE</span>

          <strong>
            {totalCorte}
          </strong>

        </div>

      </section>

    </div>
  );
}

export default PlanejamentoCorte;
