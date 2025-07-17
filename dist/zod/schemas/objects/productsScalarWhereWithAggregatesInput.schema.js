"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const UuidNullableWithAggregatesFilter_schema_1 = require("./UuidNullableWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const DecimalWithAggregatesFilter_schema_1 = require("./DecimalWithAggregatesFilter.schema");
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const BoolNullableWithAggregatesFilter_schema_1 = require("./BoolNullableWithAggregatesFilter.schema");
const StringNullableListFilter_schema_1 = require("./StringNullableListFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.productsScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.productsScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.productsScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.productsScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.productsScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    category_id: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    name: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    price: zod_1.z
        .union([
        zod_1.z.lazy(() => DecimalWithAggregatesFilter_schema_1.DecimalWithAggregatesFilterObjectSchema),
        zod_1.z.number(),
    ])
        .optional(),
    stock: zod_1.z
        .union([zod_1.z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    is_active: zod_1.z
        .union([
        zod_1.z.lazy(() => BoolNullableWithAggregatesFilter_schema_1.BoolNullableWithAggregatesFilterObjectSchema),
        zod_1.z.boolean(),
    ])
        .optional()
        .nullable(),
    image: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    images: zod_1.z.lazy(() => StringNullableListFilter_schema_1.StringNullableListFilterObjectSchema).optional(),
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
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.productsScalarWhereWithAggregatesInputObjectSchema = Schema;
