import { z } from 'zod';

export const Order_itemsScalarFieldEnumSchema = z.enum([
  'id',
  'order_id',
  'product_id',
  'quantity',
  'unit_price',
  'total_price',
  'created_at',
]);
