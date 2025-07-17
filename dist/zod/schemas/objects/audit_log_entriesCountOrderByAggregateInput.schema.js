"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    payload: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    ip_address: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.audit_log_entriesCountOrderByAggregateInputObjectSchema = Schema;
