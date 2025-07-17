"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    factor_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    verified_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    ip_address: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    otp_code: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    web_authn_session_data: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.mfa_challengesCountOrderByAggregateInputObjectSchema = Schema;
