"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const FloatWithAggregatesFilter_schema_1 = require("./FloatWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ProductScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.ProductScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    title: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    price: zod_1.z
        .union([zod_1.z.lazy(() => FloatWithAggregatesFilter_schema_1.FloatWithAggregatesFilterObjectSchema), zod_1.z.number()])
        .optional(),
    imageUrl: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    domainId: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
})
    .strict();
exports.ProductScalarWhereWithAggregatesInputObjectSchema = Schema;
