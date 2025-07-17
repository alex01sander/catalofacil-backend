"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateManyStoresInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateManyStoresInput_schema_1 = require("./productsCreateManyStoresInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateManyStoresInput_schema_1.productsCreateManyStoresInputObjectSchema),
        zod_1.z.lazy(() => productsCreateManyStoresInput_schema_1.productsCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.productsCreateManyStoresInputEnvelopeObjectSchema = Schema;
