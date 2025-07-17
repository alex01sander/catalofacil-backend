"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereInput_schema_1 = require("./productsWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => productsWhereInput_schema_1.productsWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => productsWhereInput_schema_1.productsWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.ProductsRelationFilterObjectSchema = Schema;
