import { z } from 'zod';
import { storesCreateWithoutUsersInputObjectSchema } from './storesCreateWithoutUsersInput.schema';
import { storesUncheckedCreateWithoutUsersInputObjectSchema } from './storesUncheckedCreateWithoutUsersInput.schema';
import { storesCreateOrConnectWithoutUsersInputObjectSchema } from './storesCreateOrConnectWithoutUsersInput.schema';
import { storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './storesUpsertWithWhereUniqueWithoutUsersInput.schema';
import { storesCreateManyUsersInputEnvelopeObjectSchema } from './storesCreateManyUsersInputEnvelope.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './storesUpdateWithWhereUniqueWithoutUsersInput.schema';
import { storesUpdateManyWithWhereWithoutUsersInputObjectSchema } from './storesUpdateManyWithWhereWithoutUsersInput.schema';
import { storesScalarWhereInputObjectSchema } from './storesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => storesCreateWithoutUsersInputObjectSchema),
        z.lazy(() => storesCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => storesUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => storesUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => storesCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => storesCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => storesCreateManyUsersInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => storesWhereUniqueInputObjectSchema),
        z.lazy(() => storesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => storesWhereUniqueInputObjectSchema),
        z.lazy(() => storesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => storesWhereUniqueInputObjectSchema),
        z.lazy(() => storesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => storesWhereUniqueInputObjectSchema),
        z.lazy(() => storesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => storesUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => storesUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => storesScalarWhereInputObjectSchema),
        z.lazy(() => storesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const storesUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
