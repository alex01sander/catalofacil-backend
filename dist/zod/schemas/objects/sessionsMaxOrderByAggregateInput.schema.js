"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsMaxOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    factor_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    aal: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    not_after: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    refreshed_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_agent: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    ip: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    tag: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.sessionsMaxOrderByAggregateInputObjectSchema = Schema;
