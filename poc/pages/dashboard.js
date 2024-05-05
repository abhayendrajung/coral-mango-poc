import { useState } from 'react';
import DataTable from './components/dataTable';
import NavBar from './components/NavBar';
import CardListView from './components/CardListView';

const Dashboard = () => {
    const [viewType, setViewType] = useState('table');
  
    const toggleView = () => {
      setViewType(viewType === 'table' ? 'card' : 'table');
    };
  
    return (
      <div>
        <NavBar />
        <h1>Dashboard</h1>
        <button onClick={toggleView}>Toggle View</button>
        {viewType === 'table' ? <DataTable /> : <CardListView />}
      </div>
    );
  };

export default Dashboard;
