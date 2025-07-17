"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutStoresNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutStoresInput_schema_1 = require("./usersCreateWithoutStoresInput.schema");
const usersUncheckedCreateWithoutStoresInput_schema_1 = require("./usersUncheckedCreateWithoutStoresInput.schema");
const usersCreateOrConnectWithoutStoresInput_schema_1 = require("./usersCreateOrConnectWithoutStoresInput.schema");
const usersUpsertWithoutStoresInput_schema_1 = require("./usersUpsertWithoutStoresInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutStoresInput_schema_1 = require("./usersUpdateWithoutStoresInput.schema");
const usersUncheckedUpdateWithoutStoresInput_schema_1 = require("./usersUncheckedUpdateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutStoresInput_schema_1.usersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutStoresInput_schema_1.usersUncheckedCreateWithoutStoresInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutStoresInput_schema_1.usersCreateOrConnectWithoutStoresInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutStoresInput_schema_1.usersUpsertWithoutStoresInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutStoresInput_schema_1.usersUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutStoresInput_schema_1.usersUncheckedUpdateWithoutStoresInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutStoresNestedInputObjectSchema = Schema;
