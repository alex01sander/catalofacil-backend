"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const ProductWhereInput_schema_1 = require("./ProductWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => ProductWhereInput_schema_1.ProductWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => ProductWhereInput_schema_1.ProductWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => ProductWhereInput_schema_1.ProductWhereInputObjectSchema).optional(),
})
    .strict();
exports.ProductListRelationFilterObjectSchema = Schema;
