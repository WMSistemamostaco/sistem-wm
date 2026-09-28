export default function Sidebar(){

  return(

    <aside className="sidebar">

      <div className="logo">
        <h1>WM</h1>
        <span>Production System</span>
      </div>

      <nav>
        <a className="active">🏠 Dashboard</a>
        <a>📦 Ordens de Produção</a>
        <a>👖 Produtos</a>
        <a>🏭 Facções</a>
        <a>📊 Relatórios</a>
        <a>⚙ Configurações</a>
      </nav>

    </aside>
  )
}
