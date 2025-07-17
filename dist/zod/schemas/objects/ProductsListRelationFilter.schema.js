"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereInput_schema_1 = require("./productsWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => productsWhereInput_schema_1.productsWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => productsWhereInput_schema_1.productsWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => productsWhereInput_schema_1.productsWhereInputObjectSchema).optional(),
})
    .strict();
exports.ProductsListRelationFilterObjectSchema = Schema;
