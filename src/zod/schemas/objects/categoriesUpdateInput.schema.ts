import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { storesUpdateOneWithoutCategoriesNestedInputObjectSchema } from './storesUpdateOneWithoutCategoriesNestedInput.schema';
import { usersUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutCategoriesNestedInput.schema';
import { productsUpdateManyWithoutCategoriesNestedInputObjectSchema } from './productsUpdateManyWithoutCategoriesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateInput> = z
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
    color: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
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
    stores: z
      .lazy(() => storesUpdateOneWithoutCategoriesNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(
        () => usersUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema,
      )
      .optional(),
    products: z
      .lazy(() => productsUpdateManyWithoutCategoriesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoriesUpdateInputObjectSchema = Schema;
