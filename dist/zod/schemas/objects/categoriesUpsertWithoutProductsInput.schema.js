"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUpsertWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesUpdateWithoutProductsInput_schema_1 = require("./categoriesUpdateWithoutProductsInput.schema");
const categoriesUncheckedUpdateWithoutProductsInput_schema_1 = require("./categoriesUncheckedUpdateWithoutProductsInput.schema");
const categoriesCreateWithoutProductsInput_schema_1 = require("./categoriesCreateWithoutProductsInput.schema");
const categoriesUncheckedCreateWithoutProductsInput_schema_1 = require("./categoriesUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => categoriesUpdateWithoutProductsInput_schema_1.categoriesUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedUpdateWithoutProductsInput_schema_1.categoriesUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateWithoutProductsInput_schema_1.categoriesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutProductsInput_schema_1.categoriesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesUpsertWithoutProductsInputObjectSchema = Schema;
