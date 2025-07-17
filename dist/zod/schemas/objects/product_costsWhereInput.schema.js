"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_costsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DecimalFilter_schema_1 = require("./DecimalFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.product_costsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.product_costsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.product_costsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.product_costsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.product_costsWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    store_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    product_name: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    cost_price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    desired_margin: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    suggested_price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    updated_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
})
    .strict();
exports.product_costsWhereInputObjectSchema = Schema;
