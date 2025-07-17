"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidNullableWithAggregatesFilter_schema_1 = require("./UuidNullableWithAggregatesFilter.schema");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const JsonNullableWithAggregatesFilter_schema_1 = require("./JsonNullableWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    instance_id: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    payload: zod_1.z
        .lazy(() => JsonNullableWithAggregatesFilter_schema_1.JsonNullableWithAggregatesFilterObjectSchema)
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    ip_address: zod_1.z
        .union([
        zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional(),
})
    .strict();
exports.audit_log_entriesScalarWhereWithAggregatesInputObjectSchema = Schema;
