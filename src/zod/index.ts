import { z } from 'zod';

/////////////////////////////////////////
// SCHEMAS PRINCIPAIS
/////////////////////////////////////////

// Products
export const productsCreateInputSchema = z.object({
  name: z.string(),
  price: z.number(),
  user_id: z.string(), // campo obrigatório para alinhar com o modelo Prisma
  // Adicione outros campos obrigatórios conforme necessário
});

export const productsUpdateInputSchema = productsCreateInputSchema.partial();

// Sales
export const salesCreateInputSchema = z.object({
  product_name: z.string().min(1, 'Nome do produto é obrigatório'),
  quantity: z.number().min(1, 'Quantidade deve ser maior que 0'),
  unit_price: z.union([z.number(), z.string().transform(val => parseFloat(val))]).refine(val => val > 0, 'Preço unitário deve ser maior que 0'),
  total_price: z.union([z.number(), z.string().transform(val => parseFloat(val))]).refine(val => val > 0, 'Preço total deve ser maior que 0'),
  sale_date: z.union([
    z.date(),
    z.string().transform(val => new Date(val))
  ]).refine(val => !isNaN(val.getTime()), 'Data de venda inválida'),
  status: z.string().optional().default('completed'),
  store_id: z.string().optional(),
});

export const salesUpdateInputSchema = salesCreateInputSchema.partial();

// Credit Transactions
export const credit_transactionsCreateInputSchema = z.object({
  credit_account_id: z.string(),
  user_id: z.string(),
  type: z.enum(['debito', 'pagamento']),
  amount: z.union([
    z.number().positive('Valor deve ser positivo'),
    z.string().transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num) || num <= 0) {
        throw new Error('Valor deve ser um número positivo');
      }
      return num;
    })
  ]),
  description: z.string().optional(),
  date: z.union([
    z.date(),
    z.string().transform((val) => new Date(val))
  ]).optional().default(() => new Date()),
});

export const credit_transactionsUpdateInputSchema = z.object({
  credit_account_id: z.string().optional(),
  user_id: z.string().optional(),
  type: z.enum(['debito', 'pagamento']).optional(),
  amount: z.number().optional(),
  description: z.string().optional(),
  date: z.date().optional(),
});

// Credit Installments
export const credit_installmentsCreateInputSchema = z.object({
  transaction_id: z.string(),
  installment_number: z.number().int().positive('Número da parcela deve ser positivo'),
  due_date: z.union([
    z.date(),
    z.string().transform((val) => new Date(val))
  ]),
  amount: z.union([
    z.number().positive('Valor deve ser positivo'),
    z.string().transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num) || num <= 0) {
        throw new Error('Valor deve ser um número positivo');
      }
      return num;
    })
  ]),
  status: z.string().optional().default('pending'),
  paid_at: z.date().optional(),
});

export const credit_installmentsUpdateInputSchema = z.object({
  transaction_id: z.string().optional(),
  installment_number: z.number().optional(),
  due_date: z.date().optional(),
  amount: z.number().optional(),
  status: z.string().optional(),
  paid_at: z.date().optional(),
});

// Categories
export const categoriesCreateInputSchema = z.object({
  name: z.string(),
  color: z.string().optional(),
  image: z.string().optional(),
  storeId: z.string().optional(),
});

export const categoriesUpdateInputSchema = z.object({
  name: z.string().optional(),
  color: z.string().optional(),
  image: z.string().optional(),
  storeId: z.string().optional(),
});

// Customers
export const customersCreateInputSchema = z.object({
  store_owner_id: z.string(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Formato de email inválido').optional(),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  address: z.string().optional(),
  store_id: z.string().optional(),
});

export const customersUpdateInputSchema = z.object({
  store_owner_id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório').optional(),
  email: z.string().email('Formato de email inválido').optional(),
  phone: z.string().min(1, 'Telefone é obrigatório').optional(),
  address: z.string().optional(),
  store_id: z.string().optional(),
});

// Credit Accounts
export const credit_accountsCreateInputSchema = z.object({
  user_id: z.string().optional(), // Tornar opcional pois será definido pelo middleware
  store_id: z.string().optional(),
  customer_id: z.string().min(1, 'ID do cliente é obrigatório'), // Novo campo obrigatório
  customer_name: z.string().optional(), // Opcional pois virá do cliente
  customer_phone: z.string().optional(), // Opcional pois virá do cliente
  customer_address: z.string().optional(),
  total_debt: z.union([
    z.number().optional().default(0),
    z.string().transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num)) return 0;
      return num;
    }).optional().default(0)
  ]),
  status: z.string().optional().default('aguardando_pagamento'),
});

export const credit_accountsUpdateInputSchema = z.object({
  user_id: z.string().optional(),
  store_id: z.string().optional(),
  customer_id: z.string().optional(),
  customer_name: z.string().optional(),
  customer_phone: z.string().optional(),
  customer_address: z.string().optional(),
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
  status: z.string().optional().default('pending'),
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

// Cash Flow Schema (adicionado para melhor tipagem)
export const cashFlowCreateInputSchema = z.object({
  user_id: z.string(),
  store_id: z.string().optional(),
  type: z.enum(['entrada', 'saida', 'income', 'expense']).transform((val) => {
    // Converter para o formato interno do banco
    if (val === 'income') return 'entrada';
    if (val === 'expense') return 'saida';
    return val;
  }),
  category: z.string(),
  description: z.string(),
  amount: z.union([
    z.number().positive('Valor deve ser positivo'),
    z.string().transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num) || num <= 0) {
        throw new Error('Valor deve ser um número positivo');
      }
      return num;
    })
  ]),
  date: z.union([
    z.date(),
    z.string().transform((val) => new Date(val))
  ]).optional().default(() => new Date()),
  payment_method: z.string().optional().default('dinheiro'),
});

export const cashFlowUpdateInputSchema = cashFlowCreateInputSchema.partial(); 

// Schema para criar débito com parcelamento
export const creditDebitWithInstallmentsSchema = z.object({
  // Dados do cliente (novo ou existente)
  customer_name: z.string().min(1, 'Nome do cliente é obrigatório'),
  customer_phone: z.string().min(1, 'Telefone do cliente é obrigatório'),
  customer_address: z.string().optional(),
  is_new_customer: z.boolean().default(true),
  existing_customer_id: z.string().optional(),
  
  // Dados da transação
  description: z.string().min(1, 'Descrição é obrigatória'),
  total_amount: z.union([
    z.number().positive('Valor total deve ser positivo'),
    z.string().transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num) || num <= 0) {
        throw new Error('Valor total deve ser um número positivo');
      }
      return num;
    })
  ]),
  
  // Dados do parcelamento
  installments_count: z.number().int().min(1, 'Número de parcelas deve ser pelo menos 1'),
  frequency: z.enum(['diaria', 'semanal', 'quinzenal', 'mensal']),
  first_due_date: z.union([
    z.date(),
    z.string().transform((val) => new Date(val))
  ]),
  
  // Observações
  observations: z.string().optional(),
}); 