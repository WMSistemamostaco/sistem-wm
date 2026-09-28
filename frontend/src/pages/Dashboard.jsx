import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardCards from '../components/DashboardCards';
import OrdersTable from '../components/OrdersTable';

export default function Dashboard(){

return(

<div className="layoutWM">

<Sidebar/>

<main>

<Header/>

<DashboardCards/>

<OrdersTable/>

</main>

</div>

)

}
