import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { productsUpdateimagesInputObjectSchema } from './productsUpdateimagesInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { order_itemsUpdateManyWithoutProductsNestedInputObjectSchema } from './order_itemsUpdateManyWithoutProductsNestedInput.schema';
import { storesUpdateOneWithoutProductsNestedInputObjectSchema } from './storesUpdateOneWithoutProductsNestedInput.schema';
import { usersUpdateOneRequiredWithoutProductsNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutProductsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateWithoutCategoriesInput> = z
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
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    price: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stock: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    is_active: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    images: z
      .union([
        z.lazy(() => productsUpdateimagesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
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
    order_items: z
      .lazy(() => order_itemsUpdateManyWithoutProductsNestedInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesUpdateOneWithoutProductsNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => usersUpdateOneRequiredWithoutProductsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const productsUpdateWithoutCategoriesInputObjectSchema = Schema;
