"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow_stateMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    auth_code: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    code_challenge_method: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    code_challenge: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    provider_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    provider_access_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    provider_refresh_token: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    authentication_method: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    auth_code_issued_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.flow_stateMinOrderByAggregateInputObjectSchema = Schema;
