"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const mfa_factorsOrderByWithRelationInput_schema_1 = require("./mfa_factorsOrderByWithRelationInput.schema");
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
    mfa_factors: zod_1.z
        .lazy(() => mfa_factorsOrderByWithRelationInput_schema_1.mfa_factorsOrderByWithRelationInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_challengesOrderByWithRelationInputObjectSchema = Schema;
