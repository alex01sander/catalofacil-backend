"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsUncheckedCreateNestedOneWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const store_settingsCreateWithoutUsersInput_schema_1 = require("./store_settingsCreateWithoutUsersInput.schema");
const store_settingsUncheckedCreateWithoutUsersInput_schema_1 = require("./store_settingsUncheckedCreateWithoutUsersInput.schema");
const store_settingsCreateOrConnectWithoutUsersInput_schema_1 = require("./store_settingsCreateOrConnectWithoutUsersInput.schema");
const store_settingsWhereUniqueInput_schema_1 = require("./store_settingsWhereUniqueInput.schema");
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
    connect: zod_1.z
        .lazy(() => store_settingsWhereUniqueInput_schema_1.store_settingsWhereUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.store_settingsUncheckedCreateNestedOneWithoutUsersInputObjectSchema = Schema;
