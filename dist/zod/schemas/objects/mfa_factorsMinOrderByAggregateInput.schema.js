"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    friendly_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    factor_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    secret: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    phone: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    last_challenged_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    web_authn_aaguid: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.mfa_factorsMinOrderByAggregateInputObjectSchema = Schema;
