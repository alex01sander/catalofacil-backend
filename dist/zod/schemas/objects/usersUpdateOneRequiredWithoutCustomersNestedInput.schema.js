"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutCustomersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutCustomersInput_schema_1 = require("./usersCreateWithoutCustomersInput.schema");
const usersUncheckedCreateWithoutCustomersInput_schema_1 = require("./usersUncheckedCreateWithoutCustomersInput.schema");
const usersCreateOrConnectWithoutCustomersInput_schema_1 = require("./usersCreateOrConnectWithoutCustomersInput.schema");
const usersUpsertWithoutCustomersInput_schema_1 = require("./usersUpsertWithoutCustomersInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutCustomersInput_schema_1 = require("./usersUpdateWithoutCustomersInput.schema");
const usersUncheckedUpdateWithoutCustomersInput_schema_1 = require("./usersUncheckedUpdateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutCustomersInput_schema_1.usersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCustomersInput_schema_1.usersUncheckedCreateWithoutCustomersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutCustomersInput_schema_1.usersCreateOrConnectWithoutCustomersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutCustomersInput_schema_1.usersUpsertWithoutCustomersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutCustomersInput_schema_1.usersUpdateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutCustomersInput_schema_1.usersUncheckedUpdateWithoutCustomersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutCustomersNestedInputObjectSchema = Schema;
