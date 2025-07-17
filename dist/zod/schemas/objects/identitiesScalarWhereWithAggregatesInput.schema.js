"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const JsonWithAggregatesFilter_schema_1 = require("./JsonWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.identitiesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.identitiesScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.identitiesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.identitiesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.identitiesScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    provider_id: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    identity_data: zod_1.z
        .lazy(() => JsonWithAggregatesFilter_schema_1.JsonWithAggregatesFilterObjectSchema)
        .optional(),
    provider: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    last_sign_in_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    email: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
})
    .strict();
exports.identitiesScalarWhereWithAggregatesInputObjectSchema = Schema;
