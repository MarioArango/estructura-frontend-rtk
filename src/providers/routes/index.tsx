import { Routes, Route, BrowserRouter } from 'react-router';
import Login from '../../modules/session/Login';
import RecoveryPassword from '../../modules/session/RecoveryPassword';
import {
  RouteCompany,
  RouteConfiguration,
  RouteCrm,
  RouteDashboard,
  RouteInventory,
  RouteSession,
  RouteSales,
  RouteMaintenance,
} from './mapping';
import Dashboard from '../../modules/dashboard';
import Clients from '../../modules/sales/Clients';
import Orders from '../../modules/sales/Orders';
import CashRegister from '../../modules/sales/CashRegister';
import Vouchers from '../../modules/sales/Vouchers';
import AccountsReceivable from '../../modules/sales/AccountsReceivable';
import PricesList from '../../modules/sales/Configuration/PricesList';
import SalesParameters from '../../modules/sales/Configuration/SalesParameters';
import Warehouses from '../../modules/Inventories/Warehouses';
import Products from '../../modules/Inventories/Products';
import PurchaseOrders from '../../modules/Inventories/PurchaseOrders';
import PurchaseReceipt from '../../modules/Inventories/PurchaseReceipt';
import ProductOutput from '../../modules/Inventories/ProductOutput';
import ProductEntry from '../../modules/Inventories/ProductEntry';
import TransferWarehouses from '../../modules/Inventories/TransferWarehouses';
import Providers from '../../modules/Inventories/Providers';
import OportunityTracking from '../../modules/crm/OportunityTracking';
import Onmichannel from '../../modules/crm/Omnichannel';
import Promotions from '../../modules/crm/Promotions';
import JobOrder from '../../modules/maintenance/JobOrder';
import JobPanel from '../../modules/maintenance/JobPanel';
import TechnicalManagement from '../../modules/maintenance/TechnicalManagement';
import GeneralMasters from '../../modules/configuration/GeneralMasters';
import VariablesIntegration from '../../modules/configuration/VariablesIntegration';
import LogginActivities from '../../modules/configuration/LogginActivities';
import Company from '../../modules/company/company';
import BranchOffices from '../../modules/company/BranchOffices';
import Users from '../../modules/company/Users';
import Roles from '../../modules/company/Roles';

const AppRoutes = ({ Layout }: { Layout: React.FC<{ children: React.ReactNode }> }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* SESION */}
          <Route path={RouteSession.LOGIN} element={<Login />} />
          <Route path={RouteSession.RECOVERY_PASSWORD} element={<RecoveryPassword />} />

          <Route path={RouteDashboard.DASHBOARD} element={<Dashboard />} />

          {/* VENTAS */}
          <Route path={RouteSales.CLIENTS} element={<Clients />} />
          <Route path={RouteSales.CLIENTS_REGISTER} element={<Clients />} />
          <Route path={RouteSales.ORDERS} element={<Orders />} />
          <Route path={RouteSales.ORDERS_REGISTER} element={<Orders />} />
          <Route path={RouteSales.CASH_REGISTER} element={<CashRegister />} />
          <Route path={RouteSales.CASH_REGISTER_REGISTER} element={<CashRegister />} />
          <Route path={RouteSales.VOUCHERS} element={<Vouchers />} />
          <Route path={RouteSales.ACCOUNTS_RECEIVABLE} element={<AccountsReceivable />} />
          <Route path={RouteSales.PRICES_LIST} element={<PricesList />} />
          <Route path={RouteSales.PRICES_LIST_PRODUCTS} element={<PricesList />} />
          <Route path={RouteSales.SALES_PARAMETERS} element={<SalesParameters />} />

          {/* INVENTARIOS */}
          <Route path={RouteInventory.WAREHOUSES} element={<Warehouses />} />
          <Route path={RouteInventory.PRODUCTS} element={<Products />} />
          <Route path={RouteInventory.PRODUCTS_REGISTER} element={<Products />} />
          <Route path={RouteInventory.PURCHASES_ORDERS} element={<PurchaseOrders />} />
          <Route path={RouteInventory.PURCHASES_ORDERS_REGISTER} element={<PurchaseOrders />} />
          <Route path={RouteInventory.PURCHASES_RECEIPT} element={<PurchaseReceipt />} />
          <Route path={RouteInventory.PURCHASES_RECEIPT_REGISTER} element={<PurchaseReceipt />} />
          <Route path={RouteInventory.PRODUCTS_OUTPUT} element={<ProductOutput />} />
          <Route path={RouteInventory.PRODUCTS_OUTPUT_REGISTER} element={<ProductOutput />} />
          <Route path={RouteInventory.PRODUCTS_ENTRY_REGISTER} element={<ProductEntry />} />
          <Route path={RouteInventory.PRODUCTS_ENTRY_REGISTER} element={<ProductEntry />} />
          <Route path={RouteInventory.TRANSFER_WAHERHOUSE} element={<TransferWarehouses />} />
          <Route path={RouteInventory.TRANSFER_WAHERHOUSE_REGISTER} element={<TransferWarehouses />} />
          <Route path={RouteInventory.PROVIDERS} element={<Providers />} />

          {/* crm */}
          <Route path={RouteCrm.OPPORTUNITY_TRACKING} element={<OportunityTracking />} />
          <Route path={RouteCrm.OMNICHANNEL} element={<Onmichannel />} />
          <Route path={RouteCrm.PROMOTIONS} element={<Promotions />} />

          {/* MAINTENANCE */}
          <Route path={RouteMaintenance.JOB_ORDERS} element={<JobOrder />} />
          <Route path={RouteMaintenance.JOB_ORDERS_REGISTER} element={<JobOrder />} />
          <Route path={RouteMaintenance.JOB_PANEL} element={<JobPanel />} />
          <Route path={RouteMaintenance.TECHNICAL_MANAGEMENT} element={<TechnicalManagement />} />

          {/* CONFIGURACION */}
          <Route path={RouteConfiguration.GENERAL_MASTERS} element={<GeneralMasters />} />
          <Route path={RouteConfiguration.VARIABLES_INTEGRATIONS} element={<VariablesIntegration />} />
          <Route path={RouteConfiguration.LOGGIN_ACTIVITIES} element={<LogginActivities />} />

          {/* EMPRESA */}
          <Route path={RouteCompany.COMPANY} element={<Company />} />
          <Route path={RouteCompany.BRANCH_OFFICES} element={<BranchOffices />} />
          <Route path={RouteCompany.BRANCH_OFFICES_REGISTER} element={<BranchOffices />} />
          <Route path={RouteCompany.USERS} element={<Users />} />
          <Route path={RouteCompany.ROLES} element={<Roles />} />

          {/* RUTAS NO ENCONTRADAS */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
