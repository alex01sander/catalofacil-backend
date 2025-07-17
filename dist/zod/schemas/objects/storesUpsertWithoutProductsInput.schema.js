"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpsertWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesUpdateWithoutProductsInput_schema_1 = require("./storesUpdateWithoutProductsInput.schema");
const storesUncheckedUpdateWithoutProductsInput_schema_1 = require("./storesUncheckedUpdateWithoutProductsInput.schema");
const storesCreateWithoutProductsInput_schema_1 = require("./storesCreateWithoutProductsInput.schema");
const storesUncheckedCreateWithoutProductsInput_schema_1 = require("./storesUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutProductsInput_schema_1.storesUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutProductsInput_schema_1.storesUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutProductsInput_schema_1.storesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutProductsInput_schema_1.storesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpsertWithoutProductsInputObjectSchema = Schema;
