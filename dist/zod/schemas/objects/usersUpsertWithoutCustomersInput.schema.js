"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutCustomersInput_schema_1 = require("./usersUpdateWithoutCustomersInput.schema");
const usersUncheckedUpdateWithoutCustomersInput_schema_1 = require("./usersUncheckedUpdateWithoutCustomersInput.schema");
const usersCreateWithoutCustomersInput_schema_1 = require("./usersCreateWithoutCustomersInput.schema");
const usersUncheckedCreateWithoutCustomersInput_schema_1 = require("./usersUncheckedCreateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutCustomersInput_schema_1.usersUpdateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutCustomersInput_schema_1.usersUncheckedUpdateWithoutCustomersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutCustomersInput_schema_1.usersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCustomersInput_schema_1.usersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutCustomersInputObjectSchema = Schema;
