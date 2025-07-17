"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutMfa_factorsInput_schema_1 = require("./usersCreateWithoutMfa_factorsInput.schema");
const usersUncheckedCreateWithoutMfa_factorsInput_schema_1 = require("./usersUncheckedCreateWithoutMfa_factorsInput.schema");
const usersCreateOrConnectWithoutMfa_factorsInput_schema_1 = require("./usersCreateOrConnectWithoutMfa_factorsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutMfa_factorsInputObjectSchema = Schema;
