"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutStore_settingsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutStore_settingsInput_schema_1 = require("./usersUpdateWithoutStore_settingsInput.schema");
const usersUncheckedUpdateWithoutStore_settingsInput_schema_1 = require("./usersUncheckedUpdateWithoutStore_settingsInput.schema");
const usersCreateWithoutStore_settingsInput_schema_1 = require("./usersCreateWithoutStore_settingsInput.schema");
const usersUncheckedCreateWithoutStore_settingsInput_schema_1 = require("./usersUncheckedCreateWithoutStore_settingsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutStore_settingsInput_schema_1.usersUpdateWithoutStore_settingsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutStore_settingsInput_schema_1.usersUncheckedUpdateWithoutStore_settingsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutStore_settingsInput_schema_1.usersCreateWithoutStore_settingsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutStore_settingsInput_schema_1.usersUncheckedCreateWithoutStore_settingsInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutStore_settingsInputObjectSchema = Schema;
