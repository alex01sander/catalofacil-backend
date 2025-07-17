"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const DomainRelationFilter_schema_1 = require("./DomainRelationFilter.schema");
const DomainWhereInput_schema_1 = require("./DomainWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ProductWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ProductWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ProductWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ProductWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ProductWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    title: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    price: zod_1.z
        .union([zod_1.z.lazy(() => FloatFilter_schema_1.FloatFilterObjectSchema), zod_1.z.number()])
        .optional(),
    imageUrl: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    domainId: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    domain: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainRelationFilter_schema_1.DomainRelationFilterObjectSchema),
        zod_1.z.lazy(() => DomainWhereInput_schema_1.DomainWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ProductWhereInputObjectSchema = Schema;
