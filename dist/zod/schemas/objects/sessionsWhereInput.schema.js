"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const Enumaal_levelNullableFilter_schema_1 = require("./Enumaal_levelNullableFilter.schema");
const aal_level_schema_1 = require("../enums/aal_level.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const Mfa_amr_claimsListRelationFilter_schema_1 = require("./Mfa_amr_claimsListRelationFilter.schema");
const Refresh_tokensListRelationFilter_schema_1 = require("./Refresh_tokensListRelationFilter.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.sessionsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.sessionsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.sessionsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.sessionsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.sessionsWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    factor_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    aal: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumaal_levelNullableFilter_schema_1.Enumaal_levelNullableFilterObjectSchema),
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema),
    ])
        .optional()
        .nullable(),
    not_after: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    refreshed_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    user_agent: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    ip: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    tag: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    mfa_amr_claims: zod_1.z
        .lazy(() => Mfa_amr_claimsListRelationFilter_schema_1.Mfa_amr_claimsListRelationFilterObjectSchema)
        .optional(),
    refresh_tokens: zod_1.z
        .lazy(() => Refresh_tokensListRelationFilter_schema_1.Refresh_tokensListRelationFilterObjectSchema)
        .optional(),
    users: zod_1.z
        .union([
        zod_1.z.lazy(() => UsersRelationFilter_schema_1.UsersRelationFilterObjectSchema),
        zod_1.z.lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.sessionsWhereInputObjectSchema = Schema;
