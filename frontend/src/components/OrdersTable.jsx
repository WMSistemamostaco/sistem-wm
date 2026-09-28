import orders from '../data/orders';

export default function OrdersTable(){

return(

<section className="ordersTable">

<h2>Ordens de Produção</h2>

<table>
<thead>
<tr>
<th>OP</th>
<th>Produto</th>
<th>Quantidade</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{orders.map(op=>(
<tr key={op.id}>
<td>{op.ordem}</td>
<td>{op.produto}</td>
<td>{op.quantidade}</td>
<td>
<span className={op.status.replace(' ','')}>
{op.status}
</span>
</td>
</tr>
))}

</tbody>

</table>

</section>

)

}
