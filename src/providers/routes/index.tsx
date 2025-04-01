import { BrowserRouter, Routes, Route } from 'react-router';
import Inventario from '../../modules/properties/inventories';
import Maintenance from '../../modules/properties/maintenances';
import Register from '../../modules/clients/register';
import Login from '../../modules/session';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>dashboard</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventory" element={<Inventario />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/clients" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
