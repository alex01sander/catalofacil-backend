"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema_migrationsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const schema_migrationsCountOrderByAggregateInput_schema_1 = require("./schema_migrationsCountOrderByAggregateInput.schema");
const schema_migrationsMaxOrderByAggregateInput_schema_1 = require("./schema_migrationsMaxOrderByAggregateInput.schema");
const schema_migrationsMinOrderByAggregateInput_schema_1 = require("./schema_migrationsMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    version: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => schema_migrationsCountOrderByAggregateInput_schema_1.schema_migrationsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => schema_migrationsMaxOrderByAggregateInput_schema_1.schema_migrationsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => schema_migrationsMinOrderByAggregateInput_schema_1.schema_migrationsMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.schema_migrationsOrderByWithAggregationInputObjectSchema = Schema;
