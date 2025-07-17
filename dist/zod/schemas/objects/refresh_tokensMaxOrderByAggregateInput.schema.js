"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensMaxOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    revoked: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    parent: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    session_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.refresh_tokensMaxOrderByAggregateInputObjectSchema = Schema;
