"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutProductsInput_schema_1 = require("./usersUpdateWithoutProductsInput.schema");
const usersUncheckedUpdateWithoutProductsInput_schema_1 = require("./usersUncheckedUpdateWithoutProductsInput.schema");
const usersCreateWithoutProductsInput_schema_1 = require("./usersCreateWithoutProductsInput.schema");
const usersUncheckedCreateWithoutProductsInput_schema_1 = require("./usersUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutProductsInput_schema_1.usersUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutProductsInput_schema_1.usersUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutProductsInput_schema_1.usersCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutProductsInput_schema_1.usersUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutProductsInputObjectSchema = Schema;
