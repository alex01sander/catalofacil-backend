"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutStoresInput_schema_1 = require("./usersUpdateWithoutStoresInput.schema");
const usersUncheckedUpdateWithoutStoresInput_schema_1 = require("./usersUncheckedUpdateWithoutStoresInput.schema");
const usersCreateWithoutStoresInput_schema_1 = require("./usersCreateWithoutStoresInput.schema");
const usersUncheckedCreateWithoutStoresInput_schema_1 = require("./usersUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutStoresInput_schema_1.usersUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutStoresInput_schema_1.usersUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutStoresInput_schema_1.usersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutStoresInput_schema_1.usersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutStoresInputObjectSchema = Schema;
