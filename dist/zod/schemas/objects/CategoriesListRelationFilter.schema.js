"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereInput_schema_1 = require("./categoriesWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => categoriesWhereInput_schema_1.categoriesWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => categoriesWhereInput_schema_1.categoriesWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => categoriesWhereInput_schema_1.categoriesWhereInputObjectSchema).optional(),
})
    .strict();
exports.CategoriesListRelationFilterObjectSchema = Schema;
