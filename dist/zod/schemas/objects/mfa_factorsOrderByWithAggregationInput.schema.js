"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const mfa_factorsCountOrderByAggregateInput_schema_1 = require("./mfa_factorsCountOrderByAggregateInput.schema");
const mfa_factorsMaxOrderByAggregateInput_schema_1 = require("./mfa_factorsMaxOrderByAggregateInput.schema");
const mfa_factorsMinOrderByAggregateInput_schema_1 = require("./mfa_factorsMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    friendly_name: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    factor_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    secret: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    phone: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    last_challenged_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    web_authn_credential: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    web_authn_aaguid: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => mfa_factorsCountOrderByAggregateInput_schema_1.mfa_factorsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => mfa_factorsMaxOrderByAggregateInput_schema_1.mfa_factorsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => mfa_factorsMinOrderByAggregateInput_schema_1.mfa_factorsMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_factorsOrderByWithAggregationInputObjectSchema = Schema;
