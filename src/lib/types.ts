export type UserRole = 'buyer' | 'seller' | 'director';

export type Product = {
  id: string;
  name: string;
  price: number;
  discountPercent: number;
  stock: number;
  category: string;
  description: string;
};

export type Client = {
  id: string;
  name: string;
  visits: number;
  bonusPoints: number;
  certificates: number;
};

export type SalesStat = {
  day: string;
  revenue: number;
  orders: number;
};

export type Store = {
  id: string;
  name: string;
  shortDescription: string;
  address: string;
  location: string;
  schedule: string;
  primaryColor: string;
  mapQuery: string;
  products: Product[];
  clients: Client[];
  bonuses: string[];
  certificates: string[];
  salesStats: SalesStat[];
};

export type FriendInvite = {
  id: string;
  from: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
};

export type StaffInvite = {
  id: string;
  storeId: string;
  storeName: string;
  role: 'seller' | 'director';
  from: string;
  status: 'pending' | 'accepted' | 'rejected';
};

export type User = {
  id: string;
  fullName: string;
  email: string;
  activeRole: UserRole;
  availableRoles: UserRole[];
  friendInvites: FriendInvite[];
  staffInvites: StaffInvite[];
};
