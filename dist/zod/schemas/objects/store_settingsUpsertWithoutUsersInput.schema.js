"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsUpsertWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const store_settingsUpdateWithoutUsersInput_schema_1 = require("./store_settingsUpdateWithoutUsersInput.schema");
const store_settingsUncheckedUpdateWithoutUsersInput_schema_1 = require("./store_settingsUncheckedUpdateWithoutUsersInput.schema");
const store_settingsCreateWithoutUsersInput_schema_1 = require("./store_settingsCreateWithoutUsersInput.schema");
const store_settingsUncheckedCreateWithoutUsersInput_schema_1 = require("./store_settingsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => store_settingsUpdateWithoutUsersInput_schema_1.store_settingsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => store_settingsUncheckedUpdateWithoutUsersInput_schema_1.store_settingsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => store_settingsCreateWithoutUsersInput_schema_1.store_settingsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => store_settingsUncheckedCreateWithoutUsersInput_schema_1.store_settingsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.store_settingsUpsertWithoutUsersInputObjectSchema = Schema;
