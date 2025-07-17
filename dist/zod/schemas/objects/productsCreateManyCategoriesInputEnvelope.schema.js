"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateManyCategoriesInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateManyCategoriesInput_schema_1 = require("./productsCreateManyCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateManyCategoriesInput_schema_1.productsCreateManyCategoriesInputObjectSchema),
        zod_1.z.lazy(() => productsCreateManyCategoriesInput_schema_1.productsCreateManyCategoriesInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.productsCreateManyCategoriesInputEnvelopeObjectSchema = Schema;
