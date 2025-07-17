"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const audit_log_entriesCountOrderByAggregateInput_schema_1 = require("./audit_log_entriesCountOrderByAggregateInput.schema");
const audit_log_entriesMaxOrderByAggregateInput_schema_1 = require("./audit_log_entriesMaxOrderByAggregateInput.schema");
const audit_log_entriesMinOrderByAggregateInput_schema_1 = require("./audit_log_entriesMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    payload: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    ip_address: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => audit_log_entriesCountOrderByAggregateInput_schema_1.audit_log_entriesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => audit_log_entriesMaxOrderByAggregateInput_schema_1.audit_log_entriesMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => audit_log_entriesMinOrderByAggregateInput_schema_1.audit_log_entriesMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.audit_log_entriesOrderByWithAggregationInputObjectSchema = Schema;
