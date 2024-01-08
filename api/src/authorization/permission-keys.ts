export const enum PermissionKeys {
    // Super Admin - All permissions in the Dashboard
    // Franchise management
    // Machine management
    SuperAdmin = 'ALL',


    // Franchise Admin
    FranchiseAdmin = 'FranchiseAdmin',
    StoreStaffManagement = 'StoreStaffManagement',
    MachineStatus = 'MachineStatus', // ex: Working, Out of Order
    // Get his store reports

    
    // Store employee
    // CreateOrder
    storeoperator = 'storeoperator',
    DropoffOrder = 'DropoffOrder',
    OrderStatusUpdates = 'OrderStatusUpdates',
    PaymentStatusUpdates = 'PaymentStatusUpdates',

    
    // Normal authenticated user - Order creation, Profile update
    CreateOrder = 'CreateOrder', // Can create orders
    GetOrder = 'GetOrder', // Get list of orders
    UserManagement = 'UserManagement', // Can update his profile
    AccessAuthFeatures = 'AccessAuthFeatures',
    // Wallet management

    

    // Franchise management
    // Machine management
    // Store management
    // Store employee management
    
}