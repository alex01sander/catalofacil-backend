import { z } from 'zod';

/////////////////////////////////////////
// SCHEMAS PRINCIPAIS
/////////////////////////////////////////

// Products
export const productsCreateInputSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  stock: z.number().optional(),
  is_active: z.boolean().optional(),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  user_id: z.string(),
  category_id: z.string().optional(),
  store_id: z.string().optional(),
});

export const productsUpdateInputSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  stock: z.number().optional(),
  is_active: z.boolean().optional(),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  user_id: z.string().optional(),
  category_id: z.string().optional(),
  store_id: z.string().optional(),
});

// Sales
export const salesCreateInputSchema = z.object({
  user_id: z.string(),
  product_name: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_price: z.number(),
  sale_date: z.date(),
  status: z.string().optional(),
  store_id: z.string().optional(),
});

export const salesUpdateInputSchema = z.object({
  user_id: z.string().optional(),
  product_name: z.string().optional(),
  quantity: z.number().optional(),
  unit_price: z.number().optional(),
  total_price: z.number().optional(),
  sale_date: z.date().optional(),
  status: z.string().optional(),
  store_id: z.string().optional(),
});

// Credit Transactions
export const credit_transactionsCreateInputSchema = z.object({
  credit_account_id: z.string(),
  user_id: z.string(),
  type: z.string(),
  amount: z.number(),
  description: z.string(),
  date: z.date(),
});

export const credit_transactionsUpdateInputSchema = z.object({
  credit_account_id: z.string().optional(),
  user_id: z.string().optional(),
  type: z.string().optional(),
  amount: z.number().optional(),
  description: z.string().optional(),
  date: z.date().optional(),
});

// Categories
export const categoriesCreateInputSchema = z.object({
  user_id: z.string(),
  name: z.string(),
  color: z.string().optional(),
  image: z.string().optional(),
  store_id: z.string().optional(),
});

export const categoriesUpdateInputSchema = z.object({
  user_id: z.string().optional(),
  name: z.string().optional(),
  color: z.string().optional(),
  image: z.string().optional(),
  store_id: z.string().optional(),
});

// Customers
export const customersCreateInputSchema = z.object({
  store_owner_id: z.string(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  store_id: z.string().optional(),
});

export const customersUpdateInputSchema = z.object({
  store_owner_id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  store_id: z.string().optional(),
});

// Credit Accounts
export const credit_accountsCreateInputSchema = z.object({
  user_id: z.string(),
  store_id: z.string(),
  customer_name: z.string(),
  customer_phone: z.string(),
  total_debt: z.number().optional(),
  status: z.string().optional(),
});

export const credit_accountsUpdateInputSchema = z.object({
  user_id: z.string().optional(),
  store_id: z.string().optional(),
  customer_name: z.string().optional(),
  customer_phone: z.string().optional(),
  total_debt: z.number().optional(),
  status: z.string().optional(),
});

// Expenses
export const expensesCreateInputSchema = z.object({
  user_id: z.string(),
  store_id: z.string(),
  name: z.string(),
  category: z.string(),
  type: z.string(),
  amount: z.number(),
  due_date: z.date().optional(),
  is_recurring: z.boolean().optional(),
  recurring_frequency: z.string().optional(),
  status: z.string().optional(),
  paid_date: z.date().optional(),
});

export const expensesUpdateInputSchema = z.object({
  user_id: z.string().optional(),
  store_id: z.string().optional(),
  name: z.string().optional(),
  category: z.string().optional(),
  type: z.string().optional(),
  amount: z.number().optional(),
  due_date: z.date().optional(),
  is_recurring: z.boolean().optional(),
  recurring_frequency: z.string().optional(),
  status: z.string().optional(),
  paid_date: z.date().optional(),
});

// Store Settings
export const store_settingsCreateInputSchema = z.object({
  user_id: z.string(),
  store_name: z.string(),
  store_description: z.string().optional(),
  mobile_logo: z.string().optional(),
  desktop_banner: z.string().optional(),
  mobile_banner_color: z.string().optional(),
  mobile_banner_image: z.string().optional(),
  store_subtitle: z.string().optional(),
  instagram_url: z.string().optional(),
  whatsapp_number: z.string().optional(),
});

export const store_settingsUpdateInputSchema = z.object({
  user_id: z.string().optional(),
  store_name: z.string().optional(),
  store_description: z.string().optional(),
  mobile_logo: z.string().optional(),
  desktop_banner: z.string().optional(),
  mobile_banner_color: z.string().optional(),
  mobile_banner_image: z.string().optional(),
  store_subtitle: z.string().optional(),
  instagram_url: z.string().optional(),
  whatsapp_number: z.string().optional(),
});

// Orders
export const ordersCreateInputSchema = z.object({
  store_owner_id: z.string(),
  customer_id: z.string().optional(),
  customer_name: z.string(),
  customer_email: z.string().optional(),
  customer_phone: z.string().optional(),
  total_amount: z.number(),
  status: z.string().optional(),
  store_id: z.string().optional(),
});

export const ordersUpdateInputSchema = z.object({
  store_owner_id: z.string().optional(),
  customer_id: z.string().optional(),
  customer_name: z.string().optional(),
  customer_email: z.string().optional(),
  customer_phone: z.string().optional(),
  total_amount: z.number().optional(),
  status: z.string().optional(),
  store_id: z.string().optional(),
}); 