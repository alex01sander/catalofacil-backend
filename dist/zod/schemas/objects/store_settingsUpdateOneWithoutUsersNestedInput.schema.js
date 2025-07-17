"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsUpdateOneWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const store_settingsCreateWithoutUsersInput_schema_1 = require("./store_settingsCreateWithoutUsersInput.schema");
const store_settingsUncheckedCreateWithoutUsersInput_schema_1 = require("./store_settingsUncheckedCreateWithoutUsersInput.schema");
const store_settingsCreateOrConnectWithoutUsersInput_schema_1 = require("./store_settingsCreateOrConnectWithoutUsersInput.schema");
const store_settingsUpsertWithoutUsersInput_schema_1 = require("./store_settingsUpsertWithoutUsersInput.schema");
const store_settingsWhereUniqueInput_schema_1 = require("./store_settingsWhereUniqueInput.schema");
const store_settingsUpdateWithoutUsersInput_schema_1 = require("./store_settingsUpdateWithoutUsersInput.schema");
const store_settingsUncheckedUpdateWithoutUsersInput_schema_1 = require("./store_settingsUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => store_settingsCreateWithoutUsersInput_schema_1.store_settingsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => store_settingsUncheckedCreateWithoutUsersInput_schema_1.store_settingsUncheckedCreateWithoutUsersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => store_settingsCreateOrConnectWithoutUsersInput_schema_1.store_settingsCreateOrConnectWithoutUsersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => store_settingsUpsertWithoutUsersInput_schema_1.store_settingsUpsertWithoutUsersInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z
        .lazy(() => store_settingsWhereUniqueInput_schema_1.store_settingsWhereUniqueInputObjectSchema)
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => store_settingsUpdateWithoutUsersInput_schema_1.store_settingsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => store_settingsUncheckedUpdateWithoutUsersInput_schema_1.store_settingsUncheckedUpdateWithoutUsersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.store_settingsUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
