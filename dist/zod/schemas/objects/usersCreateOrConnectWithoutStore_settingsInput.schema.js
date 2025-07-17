"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutStore_settingsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutStore_settingsInput_schema_1 = require("./usersCreateWithoutStore_settingsInput.schema");
const usersUncheckedCreateWithoutStore_settingsInput_schema_1 = require("./usersUncheckedCreateWithoutStore_settingsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutStore_settingsInput_schema_1.usersCreateWithoutStore_settingsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutStore_settingsInput_schema_1.usersUncheckedCreateWithoutStore_settingsInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutStore_settingsInputObjectSchema = Schema;
