import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutDomainsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDomainsNestedInput.schema';
import { ProductUpdateManyWithoutDomainNestedInputObjectSchema } from './ProductUpdateManyWithoutDomainNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUpdateInput> = z
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutDomainsNestedInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => ProductUpdateManyWithoutDomainNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DomainUpdateInputObjectSchema = Schema;
