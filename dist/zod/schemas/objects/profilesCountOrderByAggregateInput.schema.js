"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    full_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.profilesCountOrderByAggregateInputObjectSchema = Schema;
