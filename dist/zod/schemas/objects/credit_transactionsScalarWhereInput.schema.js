"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DecimalFilter_schema_1 = require("./DecimalFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.credit_transactionsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.credit_transactionsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.credit_transactionsScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.credit_transactionsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.credit_transactionsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    credit_account_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    type: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    amount: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    date: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
})
    .strict();
exports.credit_transactionsScalarWhereInputObjectSchema = Schema;
