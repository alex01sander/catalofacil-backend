"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const UserRelationFilter_schema_1 = require("./UserRelationFilter.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const ProductListRelationFilter_schema_1 = require("./ProductListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.DomainWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.DomainWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.DomainWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.DomainWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.DomainWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    slug: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    userId: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    user: zod_1.z
        .union([
        zod_1.z.lazy(() => UserRelationFilter_schema_1.UserRelationFilterObjectSchema),
        zod_1.z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema),
    ])
        .optional(),
    products: zod_1.z.lazy(() => ProductListRelationFilter_schema_1.ProductListRelationFilterObjectSchema).optional(),
})
    .strict();
exports.DomainWhereInputObjectSchema = Schema;
