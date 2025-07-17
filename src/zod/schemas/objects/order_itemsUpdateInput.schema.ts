import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema } from './ordersUpdateOneRequiredWithoutOrder_itemsNestedInput.schema';
import { productsUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema } from './productsUpdateOneRequiredWithoutOrder_itemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    unit_price: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    total_price: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    orders: z
      .lazy(
        () => ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema,
      )
      .optional(),
    products: z
      .lazy(
        () =>
          productsUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const order_itemsUpdateInputObjectSchema = Schema;
