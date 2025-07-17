"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutMfa_factorsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutMfa_factorsInput_schema_1 = require("./usersCreateWithoutMfa_factorsInput.schema");
const usersUncheckedCreateWithoutMfa_factorsInput_schema_1 = require("./usersUncheckedCreateWithoutMfa_factorsInput.schema");
const usersCreateOrConnectWithoutMfa_factorsInput_schema_1 = require("./usersCreateOrConnectWithoutMfa_factorsInput.schema");
const usersUpsertWithoutMfa_factorsInput_schema_1 = require("./usersUpsertWithoutMfa_factorsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutMfa_factorsInput_schema_1 = require("./usersUpdateWithoutMfa_factorsInput.schema");
const usersUncheckedUpdateWithoutMfa_factorsInput_schema_1 = require("./usersUncheckedUpdateWithoutMfa_factorsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutMfa_factorsInput_schema_1.usersCreateWithoutMfa_factorsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutMfa_factorsInput_schema_1.usersUncheckedCreateWithoutMfa_factorsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutMfa_factorsInput_schema_1.usersCreateOrConnectWithoutMfa_factorsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutMfa_factorsInput_schema_1.usersUpsertWithoutMfa_factorsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutMfa_factorsInput_schema_1.usersUpdateWithoutMfa_factorsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutMfa_factorsInput_schema_1.usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutMfa_factorsNestedInputObjectSchema = Schema;
