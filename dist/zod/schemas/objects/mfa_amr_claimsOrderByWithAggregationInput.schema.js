"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const mfa_amr_claimsCountOrderByAggregateInput_schema_1 = require("./mfa_amr_claimsCountOrderByAggregateInput.schema");
const mfa_amr_claimsMaxOrderByAggregateInput_schema_1 = require("./mfa_amr_claimsMaxOrderByAggregateInput.schema");
const mfa_amr_claimsMinOrderByAggregateInput_schema_1 = require("./mfa_amr_claimsMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    session_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    authentication_method: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => mfa_amr_claimsCountOrderByAggregateInput_schema_1.mfa_amr_claimsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => mfa_amr_claimsMaxOrderByAggregateInput_schema_1.mfa_amr_claimsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => mfa_amr_claimsMinOrderByAggregateInput_schema_1.mfa_amr_claimsMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_amr_claimsOrderByWithAggregationInputObjectSchema = Schema;
