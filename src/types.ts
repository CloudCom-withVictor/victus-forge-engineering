export type Category = 'Engineering' | 'Fabrication' | 'CNC Cutting' | 'Company Updates' | 'Industry Insights';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  date: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  stock: number;
  imageUrl?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: { productId: string; quantity: number }[];
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  createdAt: string;
}

export interface QuoteRequest {
  id: string;
  userId: string;
  service: 'CNC' | 'Fabrication' | 'Welding' | 'Installation' | 'Maintenance';
  details: string;
  status: 'Submitted' | 'Reviewed' | 'Quoted' | 'Accepted' | 'Completed';
  createdAt: string;
}
