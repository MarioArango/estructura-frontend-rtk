export enum RouteSession {
  LOGIN = '/login',
  RECOVERY_PASSWORD = '/recovery-password',
}

export enum RouteDashboard {
  DASHBOARD = '/dashboard',
}

export enum RouteSales {
  CLIENTS = '/sales/clients',
  CLIENTS_REGISTER = '/sales/clients/:id',
  ORDERS = '/sales/orders',
  ORDERS_REGISTER = '/sales/orders/:id',
  VOUCHERS = '/sales/vouchers',
  VOUCHERS_REGISTER = '/sales/vouchers/:id',
  OPEN_CASH = '/sales/open-cash',
  OPEN_CASH_REGISTER = '/sales/open-cash/:id',
  PRICES_LIST = '/sales/configuration/prices-list',
  PRICES_LIST_PRODUCTS = '/sales/configuration/prices-list/products',
}
export enum RouteInventory {
  WAREHOUSES = '/inventory/warehouses',
  WAREHOUSES_REGISTER = '/inventory/warehouses/:id',
  PRODUCTS = '/inventory/products',
  PRODUCTS_REGISTER = '/inventory/products/:id',
  PUCHARSES_ORDERS = '/inventory/purchases-orders',
  PUCHARSES_ORDERS_REGISTER = '/inventory/purchases-orders/:id',
  PUCHARSES_RECEIP = '/inventory/purchases-receipt',
  PUCHARSES_RECEIP_REGISTER = '/inventory/purchases-receipt/:id',
  PRODUCTS_INCOME = '/inventory/products-income',
  PRODUCTS_INCOME_REGISTER = '/inventory/products-income/:id',
  PRODUCTS_OUTCOME = '/inventory/products-outcome',
  PRODUCTS_OUTCOME_REGISTER = '/inventory/products-outcome/:id',
  TRANSFER_WAHERHOUSE = '/inventory/transfer-warehouse',
  TRANSFER_WAHERHOUSE_REGISTER = '/inventory/transfer-warehouse/:id',
  PROVIDERS = '/inventory/providers',
  ACCOUNTS_PAYABLE = '/inventory/accounts-payable',
}

export enum RouteCrm {
  TRACKING_OPPORTUNITIES = '/crm/tracking-opportunities',
  WHATSSAP = '/crm/whatssap',
  COMMERCIAL_CAMPAIGNS = '/crm/commercial-campaigns',
  COMMERCIAL_CAMPAIGNS_REGISTER = '/crm/commercial-campaigns/:id',
}

export enum RouteConfiguration {
  CONFIGURATION_GENERAL_MASTERS = '/configuration/general-masters',
  CONFIGURATION_VARIABLES_INTEGRATIONS = '/configuration/variables-integrations',
  CONFIGURATIONS_LOGS = '/configuration/logs',
}

export enum RouteCompany {
  COMPANY = '/company',
  COMPANY_USERS = '/company/users',
  COMPANY_ROLES = '/company/roles',
}
