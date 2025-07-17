"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const mfa_challengesCountOrderByAggregateInput_schema_1 = require("./mfa_challengesCountOrderByAggregateInput.schema");
const mfa_challengesMaxOrderByAggregateInput_schema_1 = require("./mfa_challengesMaxOrderByAggregateInput.schema");
const mfa_challengesMinOrderByAggregateInput_schema_1 = require("./mfa_challengesMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    factor_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    verified_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    ip_address: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    otp_code: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    web_authn_session_data: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => mfa_challengesCountOrderByAggregateInput_schema_1.mfa_challengesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => mfa_challengesMaxOrderByAggregateInput_schema_1.mfa_challengesMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => mfa_challengesMinOrderByAggregateInput_schema_1.mfa_challengesMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_challengesOrderByWithAggregationInputObjectSchema = Schema;
