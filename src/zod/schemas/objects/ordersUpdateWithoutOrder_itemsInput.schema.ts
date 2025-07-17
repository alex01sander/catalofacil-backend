import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { customersUpdateOneWithoutOrdersNestedInputObjectSchema } from './customersUpdateOneWithoutOrdersNestedInput.schema';
import { storesUpdateOneWithoutOrdersNestedInputObjectSchema } from './storesUpdateOneWithoutOrdersNestedInput.schema';
import { usersUpdateOneRequiredWithoutOrdersNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutOrdersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateWithoutOrder_itemsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    customer_name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    customer_email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customer_phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    total_amount: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customers: z
      .lazy(() => customersUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => usersUpdateOneRequiredWithoutOrdersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ordersUpdateWithoutOrder_itemsInputObjectSchema = Schema;
