"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const store_settingsWhereUniqueInput_schema_1 = require("./store_settingsWhereUniqueInput.schema");
const store_settingsCreateWithoutUsersInput_schema_1 = require("./store_settingsCreateWithoutUsersInput.schema");
const store_settingsUncheckedCreateWithoutUsersInput_schema_1 = require("./store_settingsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => store_settingsWhereUniqueInput_schema_1.store_settingsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => store_settingsCreateWithoutUsersInput_schema_1.store_settingsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => store_settingsUncheckedCreateWithoutUsersInput_schema_1.store_settingsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.store_settingsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
