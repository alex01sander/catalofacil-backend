import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutDomainNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDomainNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z
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
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    products: z
      .lazy(
        () => ProductUncheckedUpdateManyWithoutDomainNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DomainUncheckedUpdateWithoutUserInputObjectSchema = Schema;
