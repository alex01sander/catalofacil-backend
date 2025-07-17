"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const Enumfactor_typeWithAggregatesFilter_schema_1 = require("./Enumfactor_typeWithAggregatesFilter.schema");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const Enumfactor_statusWithAggregatesFilter_schema_1 = require("./Enumfactor_statusWithAggregatesFilter.schema");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const JsonNullableWithAggregatesFilter_schema_1 = require("./JsonNullableWithAggregatesFilter.schema");
const UuidNullableWithAggregatesFilter_schema_1 = require("./UuidNullableWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    friendly_name: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    factor_type: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumfactor_typeWithAggregatesFilter_schema_1.Enumfactor_typeWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
    ])
        .optional(),
    status: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumfactor_statusWithAggregatesFilter_schema_1.Enumfactor_statusWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
    secret: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    phone: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    last_challenged_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    web_authn_credential: zod_1.z
        .lazy(() => JsonNullableWithAggregatesFilter_schema_1.JsonNullableWithAggregatesFilterObjectSchema)
        .optional(),
    web_authn_aaguid: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.mfa_factorsScalarWhereWithAggregatesInputObjectSchema = Schema;
