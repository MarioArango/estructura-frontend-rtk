import { BrowserRouter, Routes, Route } from 'react-router';
import Inventario from '../../modules/properties/inventories';
import Register from '../../modules/clients/register';
import Login from '../../modules/session/Login';
import RecoveryPassword from '../../modules/session/RecoveryPassword';
import { RouteCompany, RouteConfiguration, RouteCrm, RouteDashboard, RouteInventory, RouteSession, RouteSales } from './mapping';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* SESION */}
        <Route path={RouteSession.LOGIN} element={<Login />} />
        <Route path={RouteSession.RECOVERY_PASSWORD} element={<RecoveryPassword />} />

        {/* RUTAS NO ENCONTRADAS */}
        <Route path="*" element={<div>404 Not Found</div>} />

        <Route path={RouteDashboard.DASHBOARD} element={<div>dashboard</div>} />

        {/* VENTAS */}
        <Route path={RouteSales.CLIENTS} element={<div>dashboard</div>} />
        <Route path={RouteSales.CLIENTS_REGISTER} element={<Register />} />
        <Route path={RouteSales.ORDERS} element={<div>dashboard</div>} />
        <Route path={RouteSales.ORDERS_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteSales.VOUCHERS} element={<div>dashboard</div>} />
        <Route path={RouteSales.VOUCHERS_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteSales.OPEN_CASH} element={<div>dashboard</div>} />
        <Route path={RouteSales.OPEN_CASH_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteSales.PRICES_LIST} element={<div>dashboard</div>} />
        <Route path={RouteSales.PRICES_LIST_PRODUCTS} element={<div>dashboard</div>} />

        {/* INVENTARIOS */}
        <Route path={RouteInventory.WAREHOUSES} element={<div>dashboard</div>} />
        <Route path={RouteInventory.WAREHOUSES_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PRODUCTS} element={<Inventario />} />
        <Route path={RouteInventory.PRODUCTS_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PUCHARSES_ORDERS} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PUCHARSES_ORDERS_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PUCHARSES_RECEIP} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PUCHARSES_RECEIP_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PRODUCTS_INCOME} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PRODUCTS_INCOME_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PRODUCTS_OUTCOME} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PRODUCTS_OUTCOME_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.TRANSFER_WAHERHOUSE} element={<div>dashboard</div>} />
        <Route path={RouteInventory.TRANSFER_WAHERHOUSE_REGISTER} element={<div>dashboard</div>} />
        <Route path={RouteInventory.PROVIDERS} element={<div>dashboard</div>} />
        <Route path={RouteInventory.ACCOUNTS_PAYABLE} element={<div>dashboard</div>} />

        {/* CRM */}
        <Route path={RouteCrm.TRACKING_OPPORTUNITIES} element={<div>dashboard</div>} />
        <Route path={RouteCrm.WHATSSAP} element={<div>dashboard</div>} />
        <Route path={RouteCrm.COMMERCIAL_CAMPAIGNS} element={<div>dashboard</div>} />
        <Route path={RouteCrm.COMMERCIAL_CAMPAIGNS_REGISTER} element={<div>dashboard</div>} />

        {/* CONFIGURACION */}
        <Route path={RouteConfiguration.CONFIGURATION_GENERAL_MASTERS} element={<div>dashboard</div>} />
        <Route path={RouteConfiguration.CONFIGURATION_VARIABLES_INTEGRATIONS} element={<div>dashboard</div>} />
        <Route path={RouteConfiguration.CONFIGURATIONS_LOGS} element={<div>dashboard</div>} />

        {/* EMPRESA */}
        <Route path={RouteCompany.COMPANY} element={<div>dashboard</div>} />
        <Route path={RouteCompany.COMPANY_USERS} element={<div>dashboard</div>} />
        <Route path={RouteCompany.COMPANY_ROLES} element={<div>dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
