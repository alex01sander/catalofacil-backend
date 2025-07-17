import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { categoriesUpdateManyWithoutStoresNestedInputObjectSchema } from './categoriesUpdateManyWithoutStoresNestedInput.schema';
import { customersUpdateManyWithoutStoresNestedInputObjectSchema } from './customersUpdateManyWithoutStoresNestedInput.schema';
import { ordersUpdateManyWithoutStoresNestedInputObjectSchema } from './ordersUpdateManyWithoutStoresNestedInput.schema';
import { salesUpdateManyWithoutStoresNestedInputObjectSchema } from './salesUpdateManyWithoutStoresNestedInput.schema';
import { usersUpdateOneRequiredWithoutStoresNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutStoresNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateWithoutProductsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    slug: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    domain: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    logo_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    banner_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    whatsapp_number: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    instagram_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    theme_color: z
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
    categories: z
      .lazy(() => categoriesUpdateManyWithoutStoresNestedInputObjectSchema)
      .optional(),
    customers: z
      .lazy(() => customersUpdateManyWithoutStoresNestedInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => ordersUpdateManyWithoutStoresNestedInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => salesUpdateManyWithoutStoresNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => usersUpdateOneRequiredWithoutStoresNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const storesUpdateWithoutProductsInputObjectSchema = Schema;
