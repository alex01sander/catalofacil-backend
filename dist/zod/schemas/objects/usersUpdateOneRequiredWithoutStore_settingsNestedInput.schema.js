"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutStore_settingsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutStore_settingsInput_schema_1 = require("./usersCreateWithoutStore_settingsInput.schema");
const usersUncheckedCreateWithoutStore_settingsInput_schema_1 = require("./usersUncheckedCreateWithoutStore_settingsInput.schema");
const usersCreateOrConnectWithoutStore_settingsInput_schema_1 = require("./usersCreateOrConnectWithoutStore_settingsInput.schema");
const usersUpsertWithoutStore_settingsInput_schema_1 = require("./usersUpsertWithoutStore_settingsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutStore_settingsInput_schema_1 = require("./usersUpdateWithoutStore_settingsInput.schema");
const usersUncheckedUpdateWithoutStore_settingsInput_schema_1 = require("./usersUncheckedUpdateWithoutStore_settingsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutStore_settingsInput_schema_1.usersCreateWithoutStore_settingsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutStore_settingsInput_schema_1.usersUncheckedCreateWithoutStore_settingsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutStore_settingsInput_schema_1.usersCreateOrConnectWithoutStore_settingsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutStore_settingsInput_schema_1.usersUpsertWithoutStore_settingsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutStore_settingsInput_schema_1.usersUpdateWithoutStore_settingsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutStore_settingsInput_schema_1.usersUncheckedUpdateWithoutStore_settingsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutStore_settingsNestedInputObjectSchema = Schema;
