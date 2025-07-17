import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithoutUsersInputObjectSchema } from './customersUpdateWithoutUsersInput.schema';
import { customersUncheckedUpdateWithoutUsersInputObjectSchema } from './customersUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => customersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => customersUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => customersUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
