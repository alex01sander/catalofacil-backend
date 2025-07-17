"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereInput_schema_1 = require("./categoriesWhereInput.schema");
const Schema = zod_1.z
    .object({
    is: zod_1.z
        .lazy(() => categoriesWhereInput_schema_1.categoriesWhereInputObjectSchema)
        .optional()
        .nullable(),
    isNot: zod_1.z
        .lazy(() => categoriesWhereInput_schema_1.categoriesWhereInputObjectSchema)
        .optional()
        .nullable(),
})
    .strict();
exports.CategoriesRelationFilterObjectSchema = Schema;
