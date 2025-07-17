"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutSessionsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutSessionsInput_schema_1 = require("./usersCreateWithoutSessionsInput.schema");
const usersUncheckedCreateWithoutSessionsInput_schema_1 = require("./usersUncheckedCreateWithoutSessionsInput.schema");
const usersCreateOrConnectWithoutSessionsInput_schema_1 = require("./usersCreateOrConnectWithoutSessionsInput.schema");
const usersUpsertWithoutSessionsInput_schema_1 = require("./usersUpsertWithoutSessionsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutSessionsInput_schema_1 = require("./usersUpdateWithoutSessionsInput.schema");
const usersUncheckedUpdateWithoutSessionsInput_schema_1 = require("./usersUncheckedUpdateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutSessionsInput_schema_1.usersCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutSessionsInput_schema_1.usersUncheckedCreateWithoutSessionsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutSessionsInput_schema_1.usersCreateOrConnectWithoutSessionsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutSessionsInput_schema_1.usersUpsertWithoutSessionsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutSessionsInput_schema_1.usersUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutSessionsInput_schema_1.usersUncheckedUpdateWithoutSessionsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutSessionsNestedInputObjectSchema = Schema;
