import orders from '../data/orders';

export default function DashboardCards(){

const aguardando = orders.filter(o=>o.status==='Aguardando').length;
const producao = orders.filter(o=>o.status==='Em Produção').length;
const preparacao = orders.filter(o=>o.status==='Em Preparação').length;

return(

<div className="cardsDashboard">

<div className="card azul">
<p>Ordens Ativas</p>
<h1>{orders.length}</h1>
</div>

<div className="card verde">
<p>Em Produção</p>
<h1>{producao}</h1>
</div>

<div className="card amarelo">
<p>Aguardando</p>
<h1>{aguardando}</h1>
</div>

<div className="card roxo">
<p>Preparação</p>
<h1>{preparacao}</h1>
</div>

</div>

)

}
