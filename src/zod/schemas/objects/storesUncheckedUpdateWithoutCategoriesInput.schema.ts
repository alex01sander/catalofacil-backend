import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { customersUncheckedUpdateManyWithoutStoresNestedInputObjectSchema } from './customersUncheckedUpdateManyWithoutStoresNestedInput.schema';
import { ordersUncheckedUpdateManyWithoutStoresNestedInputObjectSchema } from './ordersUncheckedUpdateManyWithoutStoresNestedInput.schema';
import { productsUncheckedUpdateManyWithoutStoresNestedInputObjectSchema } from './productsUncheckedUpdateManyWithoutStoresNestedInput.schema';
import { salesUncheckedUpdateManyWithoutStoresNestedInputObjectSchema } from './salesUncheckedUpdateManyWithoutStoresNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUncheckedUpdateWithoutCategoriesInput> = z
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
    user_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    customers: z
      .lazy(
        () => customersUncheckedUpdateManyWithoutStoresNestedInputObjectSchema,
      )
      .optional(),
    orders: z
      .lazy(() => ordersUncheckedUpdateManyWithoutStoresNestedInputObjectSchema)
      .optional(),
    products: z
      .lazy(
        () => productsUncheckedUpdateManyWithoutStoresNestedInputObjectSchema,
      )
      .optional(),
    sales: z
      .lazy(() => salesUncheckedUpdateManyWithoutStoresNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const storesUncheckedUpdateWithoutCategoriesInputObjectSchema = Schema;
