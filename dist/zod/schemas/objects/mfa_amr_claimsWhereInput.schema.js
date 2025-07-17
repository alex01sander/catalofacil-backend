"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const SessionsRelationFilter_schema_1 = require("./SessionsRelationFilter.schema");
const sessionsWhereInput_schema_1 = require("./sessionsWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_amr_claimsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_amr_claimsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.mfa_amr_claimsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_amr_claimsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_amr_claimsWhereInputObjectSchema).array(),
    ])
        .optional(),
    session_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    updated_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    authentication_method: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    sessions: zod_1.z
        .union([
        zod_1.z.lazy(() => SessionsRelationFilter_schema_1.SessionsRelationFilterObjectSchema),
        zod_1.z.lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.mfa_amr_claimsWhereInputObjectSchema = Schema;
