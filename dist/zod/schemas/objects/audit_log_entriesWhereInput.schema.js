"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit_log_entriesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.audit_log_entriesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.audit_log_entriesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.audit_log_entriesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.audit_log_entriesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.audit_log_entriesWhereInputObjectSchema).array(),
    ])
        .optional(),
    instance_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    payload: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    ip_address: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
})
    .strict();
exports.audit_log_entriesWhereInputObjectSchema = Schema;
