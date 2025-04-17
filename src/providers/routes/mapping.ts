export enum RouteSession {
  LOGIN = '/session/login',
  RECOVERY_PASSWORD = '/session/recovery-password',
}

export enum RouteDashboard {
  DASHBOARD = '/dashboard',
}

export enum RouteSales {
  CLIENTS = '/sales/clients',
  CLIENTS_REGISTER = '/sales/clients/:id',
  ORDERS = '/sales/orders',
  ORDERS_REGISTER = '/sales/orders/:id',
  CASH_REGISTER = '/sales/cash-register',
  CASH_REGISTER_REGISTER = '/sales/cash-register/:id',
  VOUCHERS = '/sales/vouchers',
  ACCOUNTS_RECEIVABLE = '/sales/accounts-receivable',
  PRICES_LIST = '/sales/configuration/prices-list',
  PRICES_LIST_PRODUCTS = '/sales/configuration/prices-list/products',
  SALES_PARAMETERS = '/sales/configuration/sales-parameters',
}

export enum RouteInventory {
  WAREHOUSES = '/inventory/warehouses',
  PRODUCTS = '/inventory/products',
  PRODUCTS_REGISTER = '/inventory/products/:id',
  PURCHASES_ORDERS = '/inventory/purchases-orders',
  PURCHASES_ORDERS_REGISTER = '/inventory/purchases-orders/:id',
  PURCHASES_RECEIPT = '/inventory/purchases-receipt',
  PURCHASES_RECEIPT_REGISTER = '/inventory/purchases-receipt/:id',
  PAYABLE_ACCOUNTS = '/inventory/payable-accounts',
  PRODUCTS_ENTRY = '/inventory/products-entry',
  PRODUCTS_ENTRY_REGISTER = '/inventory/products-entry/:id',
  PRODUCTS_OUTPUT = '/inventory/products-output',
  PRODUCTS_OUTPUT_REGISTER = '/inventory/products-output/:id',
  TRANSFER_WAHERHOUSE = '/inventory/transfer-warehouse',
  TRANSFER_WAHERHOUSE_REGISTER = '/inventory/transfer-warehouse/:id',
  PROVIDERS = '/inventory/providers',
}

export enum RouteCrm {
  OPPORTUNITY_TRACKING = '/crm/opportunity-tracking',
  OMNICHANNEL = '/crm/omnichannel',
  PROMOTIONS = '/crm/promotions',
}

export enum RouteMaintenance {
  JOB_ORDERS = '/maintenance/job-orders',
  JOB_ORDERS_REGISTER = '/maintenance/job-orders/:id',
  JOB_PANEL = '/maintenance/job-panel',
  TECHNICAL_MANAGEMENT = '/maintenance/technical-management',
}

export enum RouteConfiguration {
  GENERAL_MASTERS = '/configuration/general-masters',
  VARIABLES_INTEGRATIONS = '/configuration/variables-integrations',
  LOGGIN_ACTIVITIES = '/configuration/loggin-activities',
}

export enum RouteCompany {
  COMPANY = '/company',
  BRANCH_OFFICES = '/company/branch-offices',
  BRANCH_OFFICES_REGISTER = '/company/branch-offices/:id',
  USERS = '/company/users',
  ROLES = '/company/roles',
}
