"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const Enumfactor_typeFilter_schema_1 = require("./Enumfactor_typeFilter.schema");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const Enumfactor_statusFilter_schema_1 = require("./Enumfactor_statusFilter.schema");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const Mfa_challengesListRelationFilter_schema_1 = require("./Mfa_challengesListRelationFilter.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_factorsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_factorsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.mfa_factorsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_factorsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_factorsWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    friendly_name: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    factor_type: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumfactor_typeFilter_schema_1.Enumfactor_typeFilterObjectSchema),
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
    ])
        .optional(),
    status: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumfactor_statusFilter_schema_1.Enumfactor_statusFilterObjectSchema),
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    updated_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    secret: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    phone: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    last_challenged_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    web_authn_credential: zod_1.z
        .lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema)
        .optional(),
    web_authn_aaguid: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    mfa_challenges: zod_1.z
        .lazy(() => Mfa_challengesListRelationFilter_schema_1.Mfa_challengesListRelationFilterObjectSchema)
        .optional(),
    users: zod_1.z
        .union([
        zod_1.z.lazy(() => UsersRelationFilter_schema_1.UsersRelationFilterObjectSchema),
        zod_1.z.lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.mfa_factorsWhereInputObjectSchema = Schema;
