"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const DomainListRelationFilter_schema_1 = require("./DomainListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UserWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.UserWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    email: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    password: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    domains: zod_1.z.lazy(() => DomainListRelationFilter_schema_1.DomainListRelationFilterObjectSchema).optional(),
})
    .strict();
exports.UserWhereInputObjectSchema = Schema;
