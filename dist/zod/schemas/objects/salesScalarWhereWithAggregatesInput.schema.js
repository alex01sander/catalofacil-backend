"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const DecimalWithAggregatesFilter_schema_1 = require("./DecimalWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const UuidNullableWithAggregatesFilter_schema_1 = require("./UuidNullableWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.salesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.salesScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.salesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.salesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.salesScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    product_name: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    quantity: zod_1.z
        .union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    unit_price: zod_1.z
        .union([
        zod_1.z.lazy(() => DecimalWithAggregatesFilter_schema_1.DecimalWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
    ])
        .optional(),
    total_price: zod_1.z
        .union([
        zod_1.z.lazy(() => DecimalWithAggregatesFilter_schema_1.DecimalWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
    ])
        .optional(),
    sale_date: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
    status: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
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
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.salesScalarWhereWithAggregatesInputObjectSchema = Schema;
