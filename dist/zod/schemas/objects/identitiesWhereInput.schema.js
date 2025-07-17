"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const JsonFilter_schema_1 = require("./JsonFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.identitiesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.identitiesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.identitiesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.identitiesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.identitiesWhereInputObjectSchema).array(),
    ])
        .optional(),
    provider_id: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    identity_data: zod_1.z.lazy(() => JsonFilter_schema_1.JsonFilterObjectSchema).optional(),
    provider: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    last_sign_in_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
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
    email: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    users: zod_1.z
        .union([
        zod_1.z.lazy(() => UsersRelationFilter_schema_1.UsersRelationFilterObjectSchema),
        zod_1.z.lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.identitiesWhereInputObjectSchema = Schema;
